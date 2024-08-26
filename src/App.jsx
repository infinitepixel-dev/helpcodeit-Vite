import './App.css'
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, lazy, Suspense } from 'react'
import { DarkModeProvider } from './components/Context/DarkModeProvider'
import Navbar from './components/Navigation/Navbar'

import { Routes, Route } from 'react-router-dom'
// import Footer from '@subComponents/Footer'
import RoutesWithComponents from './Routes/Routes.js'
import { Helmet } from 'react-helmet-async'
import BlogPost from './components/Pages/BlogPost'
import { BlogProvider } from '@subComponents/BlogAPI' // Correct import for BlogProvider

// console.log('RoutesWithComponents: ', RoutesWithComponents)

//ANCHOR Product Management Components
import Dashboard from './components/Product_Management/pages/Dashboard.jsx'
import AddProductForm from './components/Product_Management/pages/AddProductForm'
import MerchPage from './components/Product_Management/pages/MerchPage'
import CartPage from './components/Product_Management/pages/CartPage'
import CartPopOut from './components/Product_Management/pages/CartPopOut'
import CheckoutPage from './components/Product_Management/pages/Checkout'

//INFO Define theme outside of App component
const useTheme = () => {
    const [theme, setTheme] = useState(
        window.matchMedia('(prefers-color-scheme: light)').matches
    )

    useEffect(() => {
        const themeQuery = window.matchMedia('(prefers-color-scheme: light)')
        const themeChangeHandler = () => setTheme(themeQuery.matches)

        themeQuery.addEventListener('change', themeChangeHandler)

        return () => {
            themeQuery.removeEventListener('change', themeChangeHandler)
        }
    }, [])

    return theme
}

function App() {
    // Cart Items
    const [cartItems, setCartItems] = useState([])

    const addToCart = (product) => {
        const existingProduct = cartItems.find((item) => item.id === product.id)
        if (existingProduct) {
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            )
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }])
        }
    }

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id))
    }

    const updateQuantity = (id, quantity) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, quantity) }
                    : item
            )
        )
    }

    //NOTE -------END BLOG API CALL
    const theme = useTheme()
    const footerComponent = RoutesWithComponents.find(
        (route) => route.key === 'footer'
    )?.component
    // console.log('footerComponent: ', footerComponent)

    return (
        <DarkModeProvider>
            <BlogProvider>
                <div>
                    <Helmet>
                        <meta
                            name="title"
                            property="og:title"
                            content="Help Code It"
                        />
                        <meta
                            name="description"
                            property="og:description"
                            content="Help Code It is a site for beginning developers that helps you learn how to code."
                        />
                        <meta
                            name="image"
                            property="og:image"
                            content="https://www.helpcodeit.com/assets/helpcodeitlogo-CsyqkzOG.svg"
                        />
                        <meta
                            name="url"
                            property="og:url"
                            content="https://www.helpcodeit.com"
                        />
                        <meta
                            name="type"
                            property="og:type"
                            content="website"
                        />
                    </Helmet>
                    <div className="m-0 w-full p-0">
                        <Navbar theme={theme} />
                    </div>

                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            {RoutesWithComponents.map(
                                ({
                                    path,
                                    component: Component,
                                    key,
                                    props,
                                }) => (
                                    <Route
                                        key={key}
                                        path={path}
                                        element={<Component {...props} />}
                                    />
                                )
                            )}
                            <Route path="/post/:id" element={<BlogPost />} />

                            {/* Product Management Routes */}
                            {/* /add-product */}
                            <Route
                                path="/add-product"
                                element={<AddProductForm />}
                            />
                            {/* /dashboard */}
                            <Route path="/dashboard" element={<Dashboard />} />
                            {/* /products */}
                            <Route
                                path="/merch"
                                element={
                                    <MerchPage
                                        cartItems={cartItems}
                                        addToCart={addToCart}
                                    />
                                }
                            />
                            {/* Cart Page */}
                            <Route
                                path="/cart"
                                element={
                                    <CartPage
                                        cartItems={cartItems}
                                        setCartItems={setCartItems}
                                        removeFromCart={removeFromCart}
                                        updateQuantity={updateQuantity}
                                    />
                                }
                            />
                            {/* Cart Pop Out */}
                            <Route
                                path="/cartPopOut"
                                element={<CartPopOut cartItems={cartItems} />}
                            />
                            {/* Checkout Page */}
                            <Route
                                path="/checkout"
                                element={<CheckoutPage cartItems={cartItems} />}
                            />
                            {/* No Access */}
                            <Route path="no-access" element={<Dashboard />} />
                            <Route path="/login" element={<Dashboard />} />
                        </Routes>
                    </Suspense>

                    <div className="m-0 mt-5 w-full p-0">
                        {/* <Footer /> */}
                        {footerComponent
                            ? React.createElement(footerComponent)
                            : null}
                    </div>
                </div>
                <button
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }
                    className="fixed bottom-12 right-5 z-0 rounded-full bg-blue-500 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700"
                >
                    Back to top ↑
                </button>
            </BlogProvider>
        </DarkModeProvider>
    )
}

// Export App but also allow routes to be exported
// export { routes }
export default App
