import { useState } from 'react'

//INFO Animation Libraries
import { gsap } from 'gsap'

function ProductsUtility() {
    const [editProduct, setEditProduct] = useState(null)

    // Edit product handler
    const handleEditClick = (
        product,
        setEditedData,
        setImageOption,
        setImageUrl,
        setImageFile
    ) => {
        setEditedData({
            title: product.title ?? '',
            price: product.price ?? '',
            description: product.description ?? '',
            category: product.category ?? '',
            image_url: product.image_url ?? '',
            meta_title: product.meta_title ?? '',
            meta_description: product.meta_description ?? '',
            meta_keywords: product.meta_keywords ?? '',
        })
        setImageOption(product.image_url ? 'image_url' : ('image_upload' ?? ''))
        setImageUrl(product.image_url ?? '')
        setImageFile(null)
        setEditProduct(product.id)
    }

    // Input change handler for form fields
    const handleInputChange = (e, setEditedData) => {
        // console.log('handleInputChange...')

        const { name, value } = e.target
        // console.log(`Changing ${name} to ${value}`)
        setEditedData((prevData) => ({
            ...prevData,
            [name]: value ?? '', // Ensure that the value is never undefined
        }))
    }

    // Save product changes
    const handleSave = async (
        id,
        apiUrl,
        editedData,
        fetchProducts,
        imageOption,
        imageFile,
        imageUrl
    ) => {
        const updateUrl = `${apiUrl}/api/products/${id}`
        const formData = new FormData()

        // Add form data excluding image_url
        for (const key in editedData) {
            if (key !== 'image_url') {
                formData.append(key, editedData[key])
            }
        }

        // Add image file or URL based on the selected option
        if (imageOption === 'image_upload' && imageFile) {
            formData.append('image', imageFile)
        } else if (imageOption === 'image_url' && imageUrl) {
            formData.append('image_url', imageUrl)
        }

        try {
            const response = await fetch(updateUrl, {
                method: 'PUT',
                body: formData,
            })
            if (!response.ok) {
                const errorData = await response.json()
                console.error('Error:', errorData)
            } else {
                fetchProducts()
                setEditProduct(null)
            }
        } catch (err) {
            console.error(err)
        }
    }

    // Cancel editing mode
    const handleCancel = (setEditedData, setImageFile, setImageUrl) => {
        setEditProduct(null)
        setEditedData({
            title: '',
            price: '',
            description: '',
            category: '',
            image_url: '',
            meta_title: '',
            meta_description: '',
            meta_keywords: '',
        })
        setImageFile(null)
        setImageUrl('')
    }

    // Handle trash icon animation on click (turn and shake)
    const handleDeleteClick = (id, index, setSelectedProduct, setShowModal) => {
        setSelectedProduct({ id, index })
        setShowModal(true) // Show the modal when delete is clicked
    }

    const confirmDelete = async (
        selectedProduct,
        trashIconRefs,
        handleDelete,
        cardRefs,
        setShowModal,
        setSelectedProduct
    ) => {
        if (selectedProduct) {
            // Trash icon animation
            await gsap.to(trashIconRefs.current[selectedProduct.index], {
                rotate: 90,
                repeat: 3,
                yoyo: true,
                duration: 0.1,
            })

            // Proceed with deletion

            handleDelete(
                selectedProduct.id,
                selectedProduct.index,
                trashIconRefs,
                cardRefs
            )
            setShowModal(false)
            setSelectedProduct(null)
        }
    }

    const closeModal = (setShowModal) => {
        setShowModal(false)
    }

    //returns functions to be used in other components
    return {
        editProduct,
        handleEditClick,
        handleInputChange,
        handleSave,
        handleCancel,
        handleDeleteClick,
        confirmDelete,
        closeModal,
    }
}

export default ProductsUtility
