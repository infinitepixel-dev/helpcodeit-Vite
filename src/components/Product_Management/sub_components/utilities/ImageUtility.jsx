import { useState } from 'react'

function ImageUtility() {
    // State to manage image upload and image URL
    const [imageOption, setImageOption] = useState('image_url') // default to 'image_url' or 'image_upload'
    const [imageUrl, setImageUrl] = useState('') // default to an empty string
    const [imageFile, setImageFile] = useState(null) // default to null

    // Convert blob data to base64 string for image display
    const convertBlobToBase64 = (blob) => {
        if (!blob) return null
        const byteArray = new Uint8Array(blob.data)
        const base64String = btoa(
            byteArray.reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ''
            )
        )
        return `data:image/jpeg;base64,${base64String}`
    }

    // Handle image option change (URL or upload)
    const handleImageOptionChange = (e, editedData, setEditedData) => {
        const selectedOption = e.target.value

        // Update image option first
        setImageOption(selectedOption)

        if (selectedOption === 'image_url') {
            // Reset the file and ensure the URL is set correctly
            setImageFile(null)
            const url = editedData.image_url ?? ''
            setImageUrl(url)
            setEditedData((prevData) => ({
                ...prevData,
                image_url: url,
            }))
        } else if (selectedOption === 'image_upload') {
            // Clear the URL and allow for file upload
            setImageUrl('')
            setEditedData((prevData) => ({
                ...prevData,
                image_url: '', // Ensure this is empty when switching to file upload
            }))
        }
    }

    // Handle file upload for image
    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (!file) return

        const img = document.createElement('img')
        const reader = new FileReader()

        reader.onload = (event) => {
            img.src = event.target.result
            img.onload = () => {
                const canvas = document.createElement('canvas')
                const ctx = canvas.getContext('2d')
                const MAX_WIDTH = 1200
                const MAX_HEIGHT = 1200
                let width = img.width
                let height = img.height

                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width
                        width = MAX_WIDTH
                    }
                } else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height
                        height = MAX_HEIGHT
                    }
                }
                canvas.width = width
                canvas.height = height
                ctx.drawImage(img, 0, 0, width, height)

                canvas.toBlob((blob) => {
                    setImageFile(blob) // Set the compressed image file
                }, file.type)
            }
        }
        reader.readAsDataURL(file) // Load image as data URL
    }

    // Handle image URL input change
    const handleImageUrlChange = (e, setEditedData) => {
        const value = e.target.value
        setImageUrl(value)

        console.log('Image URL: ', value)

        setEditedData((prevData) => ({ ...prevData, image_url: value }))
    }

    //returns functions to be used in other components
    return {
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
    }
}

export default ImageUtility
