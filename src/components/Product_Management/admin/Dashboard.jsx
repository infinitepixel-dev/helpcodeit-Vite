//Dashboard.jsx

/*
A component that displays the product dashboard for the admin
*/

//INFO React Libraries
import { useContext, useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'

//INFO Animation Libraries
import { gsap } from 'gsap'

//INFO Icons
import { FaRegListAlt } from 'react-icons/fa'

//ANCHOR Product Management Components
//INFO Admin
import Login from './Login'
import Logout from './Logout'

//INFO Sub-components - apis
//products
import DashboardProductCard from '../sub_components/apis/products/DashboardProductCard'
import ProductsAPI from '../sub_components/apis/products/ProductsAPI'

//INFO Sub-components - contexts
import { AuthContext } from '../sub_components/contexts/AuthContext'

//INFO Sub-components - sub-menus
import AdminSidebar from '../sub_components/sub-menus/AdminSidebar'

//INFO Sub-components - utilities
import ImageUtility from '../sub_components/utilities/ImageUtility'
import ProductsUtility from '../sub_components/utilities/ProductsUtility'

//INFO Sub-components - widgets
import BandsInTownEvents from '../sub_components/widgets/BandsInTownEvents'

function Dashboard() {
    const apiUrl = `${window.location.protocol}//${window.location.hostname}:3082`
    const { user, login, loading } = useContext(AuthContext)

    const [products, setProducts] = useState([])

    const { fetchProducts, handleDelete } = ProductsAPI(apiUrl, setProducts)

    const {
        editProduct,
        handleEditClick,
        handleInputChange,
        handleSave,
        handleCancel,
        handleDeleteClick,
        confirmDelete,
        closeModal,
    } = ProductsUtility()

    const {
        imageOption,
        setImageOption,
        imageFile,
        setImageFile,
        imageUrl,
        setImageUrl,
        convertBlobToBase64,
        handleImageOptionChange,
        handleFileChange,
        handleImageUrlChange,
    } = ImageUtility()

    // Ref to track if component is mounted
    const hasMounted = useRef(false)

    const navigate = useNavigate()
    const location = useLocation()

    const [editedData, setEditedData] = useState({
        title: '',
        price: '',
        description: '',
        category: '',
        image_url: '', // Default to an empty string
        meta_title: '',
        meta_description: '',
        meta_keywords: '',
    })

    const cardRefs = useRef([])
    const trashIconRefs = useRef([])
    const arrowRefs = useRef([])
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)
    // Admin Sidebar state and functions
    const [showSidebar, setShowSidebar] = useState(false)

    const reverseRoleMap = {
        1: 'admin',
        2: 'storeManager',
        3: 'user',
    }

    // Animation for trash icon on mount
    useEffect(() => {
        const validIcons = Array.from(trashIconRefs.current).filter(
            (icon) => icon !== null
        )
        validIcons.forEach((icon, index) => {
            if (icon) {
                gsap.set(icon, { scale: 0, opacity: 0 })
                gsap.to(icon, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.3,
                    ease: 'back.out(1.7)',
                    delay: index * 0.1, // Stagger animation for better effect
                })
            }
        })
    }, [products])

    // Handle user login from query parameters in URL
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search)
        const userParam = queryParams.get('user')

        if (userParam && !user) {
            const userData = JSON.parse(decodeURIComponent(userParam))
            if (userData.role !== 1) {
                console.log('User Data: ', userData)
                console.log('User Param', userParam)

                navigate('/no-access')
            } else {
                login(userData)
            }
        }
    }, [location.search, user, login, navigate])

    // Fetch products from API if user is authenticated
    useEffect(() => {
        if (user) {
            fetchProducts()
        }
    }, [user, apiUrl, fetchProducts])

    // Animate product cards on initial mount
    useEffect(() => {
        if (!hasMounted.current) {
            const validRefs = Array.from(cardRefs.current).filter(
                (ref) => ref !== null
            )
            if (validRefs.length > 0) {
                gsap.fromTo(
                    validRefs,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        stagger: 0.2,
                        duration: 1,
                        ease: 'power3.out',
                    }
                )
            }
            hasMounted.current = true // Set the flag to true after initial mount
        }
    }, [])

    useEffect(() => {
        // Animate down arrow on hover
        if (hoveredIndex !== null) {
            gsap.to(arrowRefs.current[hoveredIndex], {
                opacity: 1,
                y: 10,
                duration: 0.3,
            })
        } else {
            arrowRefs.current.forEach((arrow) =>
                gsap.to(arrow, { opacity: 0, y: 0, duration: 0.3 })
            )
        }
    }, [hoveredIndex])

    //REVIEW If the page is loading display a loader
    if (loading) return <div>Loading...</div>

    //ANCHOR If the user is not authenticated, display the login form
    if (!user) {
        return (
            <div className="container mx-auto p-4">
                <h1 className="mb-8 text-center text-4xl font-bold text-white">
                    Product Dashboard
                </h1>
                <div className="text-center">
                    <Login />
                </div>
            </div>
        )
    }

    const openSidebar = () => {
        setShowSidebar(true)
        gsap.fromTo(
            '.admin-sidebar',
            { x: '-100%' },
            { x: '0%', duration: 0.5, ease: 'power3.inOut' }
        )
    }

    return (
        <div className="container mx-auto p-4">
            <div>
                <Logout user={user} role={reverseRoleMap[user.role]} />
            </div>
            <h1 className="mb-8 text-center text-4xl font-bold text-white">
                Product Dashboard
            </h1>
            {/* Navigation */}
            <nav aria-label="Page navigation" className="mb-6">
                <ul className="flex justify-center space-x-6">
                    <li>
                        <Link
                            to="/add-product"
                            className="text-lg font-medium text-blue-600 hover:text-blue-800"
                        >
                            Add Product
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/merch"
                            className="text-lg font-medium text-blue-600 hover:text-blue-800"
                        >
                            Merch Page
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/cart"
                            className="text-lg font-medium text-blue-600 hover:text-blue-800"
                        >
                            Cart Page
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/checkout"
                            className="text-lg font-medium text-blue-600 hover:text-blue-800"
                        >
                            Checkout Page
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/users-manager"
                            className="text-lg font-medium text-blue-600 hover:text-blue-800"
                        >
                            Users Manger
                        </Link>
                    </li>
                </ul>
            </nav>

            <button
                className="fixed left-0 top-16 z-50 p-4"
                onClick={openSidebar}
            >
                <FaRegListAlt
                    className="text-3xl text-slate-400"
                    alt="Sidebar Admin Menu"
                />
            </button>

            {/* AdminSidebar here... */}
            <AdminSidebar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />

            {/* Product Grid */}
            <div className="grid auto-rows-min grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product, index) => {
                    // console.log('Edited Data: ', editedData)

                    return (
                        <DashboardProductCard
                            key={product.id}
                            product={product}
                            editProduct={editProduct}
                            editedData={editedData}
                            setEditedData={setEditedData}
                            imageOption={imageOption}
                            imageUrl={imageUrl}
                            handleFileChange={handleFileChange}
                            handleImageUrlChange={handleImageUrlChange}
                            handleImageOptionChange={handleImageOptionChange}
                            handleDeleteClick={handleDeleteClick}
                            handleInputChange={handleInputChange}
                            cardRefs={cardRefs}
                            trashIconRefs={trashIconRefs}
                            arrowRefs={arrowRefs}
                            setHoveredIndex={setHoveredIndex}
                            index={index}
                            handleSave={handleSave}
                            apiUrl={apiUrl}
                            fetchProducts={fetchProducts}
                            imageFile={imageFile}
                            handleCancel={handleCancel}
                            setImageFile={setImageFile}
                            setImageUrl={setImageUrl}
                            convertBlobToBase64={convertBlobToBase64}
                            handleEditClick={handleEditClick}
                            setImageOption={setImageOption}
                            setSelectedProduct={setSelectedProduct}
                            setShowModal={setShowModal}
                        />
                    )
                })}

                {/* Delete Confirmation Modal */}
                {showModal && (
                    <div className="payment-modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-black">
                        <div className="rounded-lg bg-white p-8 text-center shadow-lg">
                            <h2 className="mb-4 text-2xl font-bold">
                                Delete Product
                            </h2>
                            <p className="mb-4">
                                Are you sure you want to delete this product?
                            </p>
                            <button
                                className="mr-4 rounded-lg bg-red-500 px-4 py-2 text-white shadow transition hover:bg-red-700"
                                onClick={() =>
                                    confirmDelete(
                                        selectedProduct,
                                        trashIconRefs,
                                        handleDelete,
                                        cardRefs,
                                        setShowModal,
                                        setSelectedProduct
                                    )
                                }
                            >
                                Confirm
                            </button>
                            <button
                                className="rounded-lg bg-gray-500 px-4 py-2 text-white shadow transition hover:bg-gray-700"
                                onClick={() => closeModal(setShowModal)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <BandsInTownEvents artistName="Metallica" />
        </div>
    )
}

export default Dashboard
