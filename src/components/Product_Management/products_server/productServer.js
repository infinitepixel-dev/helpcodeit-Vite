//WINDOWS
//nodemon --exec "cls && node" ./productServer.js

/* eslint-disable no-undef */
// Import dependencies
const express = require('express')
const mysql = require('mysql2')
const bodyParser = require('body-parser')
const cors = require('cors')
const multer = require('multer') // For handling file uploads
const sharp = require('sharp')
// const { promisify } = require('util')
// const fs = require('fs')

const dotenv = require('dotenv')
const Stripe = require('stripe') // Import Stripe

dotenv.config()

// Initialize Stripe with secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
// console.log('stripe secret key: ', process.env.STRIPE_SECRET_KEY)

const app = express()

// Add this CORS configuration to allow React on port 5173
app.use(
    cors({
        origin: (origin, callback) => {
            const allowedOrigins = [
                'http://localhost:5173',
                'http://66.128.253.47:5173',
                'https://vps.infinitepixel.dev',
            ]
            // If the origin is in the list of allowed origins or no origin (for non-browser requests)
            if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
                callback(null, true)
            } else {
                callback(new Error('Not allowed by CORS'))
            }
        },
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,
    })
)

app.use(bodyParser.json())

// Configure multer for handling file uploads (store image in memory)
const upload = multer({ storage: multer.memoryStorage() })

// Create connection
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
})

// Test the connection pool
db.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to the database:', err)
    } else {
        console.log('Connected to MySQL using connection pool')
        connection.release() // Release the connection back to the pool
    }
})

//API GETS all products from the 'products' table of the database
app.get('/api/products', (req, res) => {
    db.query('SELECT * FROM products', (err, result) => {
        // console.log('Products: ', result) // Debug log to check for duplicates;

        if (err) throw err
        res.json(result)
    })
})

//API Creates a new product in the 'products' table of the database
app.post('/api/products', upload.single('image'), async (req, res) => {
    const {
        title,
        price,
        description,
        category,
        payment_id,
        image_url,
        meta_title,
        meta_description,
        meta_keywords,
    } = req.body

    let image = null

    if (req.file) {
        // Compress and resize the image
        const compressedImage = await sharp(req.file.buffer)
            .resize(800) // Resize to 800px width, maintaining aspect ratio
            .jpeg({ quality: 80 }) // Convert to JPEG with 80% quality
            .toBuffer()

        image = compressedImage
    }

    // Validate title and price fields
    if (!title || !price) {
        return res.status(400).json({ error: 'Title and price are required.' })
    }

    // Insert into the database
    db.query(
        'INSERT INTO products (title, price, description, category, payment_id, image_url, image, meta_title, meta_description, meta_keywords) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
            title,
            price,
            description,
            category,
            payment_id,
            image_url,
            image,
            meta_title,
            meta_description,
            meta_keywords,
        ],
        (err, result) => {
            if (err) {
                console.error(err)
                return res
                    .status(500)
                    .json({ error: 'Database error occurred.' })
            }
            return res.status(201).json({
                id: result.insertId,
                message: 'Product added successfully.',
            })
        }
    )
})

//API GET a single product from the 'products' table of the database
app.get('/api/products/:id', (req, res) => {
    const { id } = req.params

    db.query('SELECT * FROM products WHERE id = ?', [id], (err, result) => {
        if (err) {
            console.error(err)
            return res.status(500).json({ error: 'Database error occurred.' })
        }
        if (result.length === 0) {
            return res.status(404).json({ error: 'Product not found.' })
        }
        return res.json(result[0])
    })
})

//API DELETES a product from the 'products' table of the database
app.delete('/api/products/:id', (req, res) => {
    const { id } = req.params

    // eslint-disable-next-line no-unused-vars
    db.query('DELETE FROM products WHERE id = ?', [id], (err, result) => {
        if (err) {
            console.error(err)
            return res.status(500).json({ error: 'Database error occurred.' })
        }
        return res.json({ message: 'Product deleted successfully.' })
    })
})

/* 
  title VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    category VARCHAR(255),
    payment_id VARCHAR(255),
    image_url VARCHAR(255),  -- URL for the product image
    image BLOB,  -- Binary data for the product image if stored directly
    meta_title VARCHAR(255),  -- SEO Title for the product
    meta_description TEXT,  -- SEO Description for the product
    meta_keywords TEXT,  -- SEO Keywords for the product
*/

//API UPDATES a product in the 'products' table of the database
//Edit product
app.put('/api/products/:id', upload.single('image'), (req, res) => {
    const { id } = req.params
    const {
        title,
        price,
        description,
        category,
        payment_id,
        image_url,
        meta_title,
        meta_description,
        meta_keywords,
    } = req.body

    console.log('Image URL: ', image_url) // Debug log to check for duplicates

    let image = null

    // If the image file is uploaded, set it
    if (req.file) {
        image = req.file.buffer // Store the image as a buffer in the database
        console.log('Image uploaded:', image)
    }

    // Validate that the title and price fields are not empty
    if (!title || !price) {
        return res.status(400).json({ error: 'Title and price are required.' })
    }

    // Construct the SQL query for updating
    const sql = `
        UPDATE products 
        SET title = ?, price = ?, description = ?, category = ?, payment_id = ?, 
            image_url = ?, image = ?, meta_title = ?, meta_description = ?, meta_keywords = ?
        WHERE id = ?
    `

    const values = [
        title,
        price,
        description,
        category,
        payment_id,
        image_url || '', // Ensure image_url is passed correctly
        image,
        meta_title,
        meta_description,
        meta_keywords,
        id,
    ]

    //REVIEW Unused result variable
    // eslint-disable-next-line no-unused-vars
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Uh oh PUT product error:', err)
            return res.status(500).json({ error: 'Database error occurred.' })
        }
        return res.json({ message: 'Product updated successfully.' })
    })
})

//TODO Break this out to a Stripe_Payments server file
//ANCHOR Stripe Payment
/*

API calls return simulated objects. For example, you can retrieve and use test account, payment, customer, charge, refund, transfer, balance, and subscription objects.

*/

// Stripe payment route
app.post('/api/payment', async (req, res) => {
    const { amount, currency, description } = req.body

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount, // Amount is now in cents and correctly rounded
            currency,
            description,
            payment_method_types: ['card'],
        })

        return res
            .status(200)
            .json({ clientSecret: paymentIntent.client_secret })
    } catch (error) {
        console.error('Error creating payment intent:', error)
        return res.status(500).json({ error: 'Payment failed.' })
    }
})

//ANCHOR Set server to public on a port
app.listen(3082, '0.0.0.0', () => console.log(`Server started on port 3082`))

//INFO Seed the db with product data if one doesn't exist
/*

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    category VARCHAR(255),
    payment_id VARCHAR(255),
    image_url VARCHAR(255),  -- URL for the product image
    image BLOB,  -- Binary data for the product image if stored directly
    meta_title VARCHAR(255),  -- SEO Title for the product
    meta_description TEXT,  -- SEO Description for the product
    meta_keywords TEXT,  -- SEO Keywords for the product
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


*/

//INFO drop seo_meta from existing products if it
//ALTER TABLE products DROP COLUMN seo_meta;
