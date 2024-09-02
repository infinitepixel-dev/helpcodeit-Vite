//ProductsAPI.jsx

/*
A custom hook that fetches products from the API and handles product deletion
*/
import { useCallback } from 'react'

//INFO Animation Libraries
import { gsap } from 'gsap'

function ProductsAPI(apiUrl, setProducts) {
    // Fetch updated products list
    /*
    Using Memoization to prevent unnecessary re-renders
    
    Preventing Unnecessary Rerenders: In React, if a component re-renders, all the functions inside that component are recreated on each render. If those functions are passed down as props to child components or used as dependencies in useEffect or useMemo, it can cause the child components to rerender unnecessarily or cause the useEffect to run again. Memoization helps avoid this by ensuring the function retains its identity between renders unless its dependencies change.
    */
    const fetchProducts = useCallback(async () => {
        await fetch(`${apiUrl}/api/products`)
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) =>
                console.error('Uh oh! There was an error getting products', err)
            )
    }, [apiUrl, setProducts]) // Memoize based on apiUrl and setProducts

    // Handle product deletion
    const handleDelete = async (id, index, trashIconRefs, cardRefs) => {
        // console.log(
        //     'Products API handleDelete: ',
        //     id,
        //     index,
        //     trashIconRefs,
        //     cardRefs
        // )

        // Animate only the trash icon and the specific card before deletion
        await gsap.to(trashIconRefs.current[index], {
            rotate: 90,
            repeat: 3,
            yoyo: true,
            duration: 0.1,
        })

        const deleteUrl = `${apiUrl}/api/products/${id}`
        try {
            const response = await fetch(deleteUrl, { method: 'DELETE' })
            if (!response.ok) {
                const errorData = await response.json()
                console.error('Error:', errorData)
            } else {
                // Animate the card itself before removing it
                await gsap.to(cardRefs.current[index], {
                    opacity: 0,
                    y: -50,
                    duration: 0.5,
                    onComplete: () => {
                        // Once the animation completes, remove the card from the DOM
                        setProducts((prevProducts) =>
                            prevProducts.filter((product) => product.id !== id)
                        )
                    },
                })
            }
        } catch (err) {
            console.error('Uh oh! There was an error deleting things!!', err)
        }
    }

    //returns functions to be used in other components
    return {
        fetchProducts,
        handleDelete,
    }
}

export default ProductsAPI
