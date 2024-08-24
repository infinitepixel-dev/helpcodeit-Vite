//WINDOWS
//nodemon --exec "cls && node" ./productServer.js

/* eslint-disable no-undef */
// Import dependencies
const express = require('express')
const mysql = require('mysql2')
const bodyParser = require('body-parser')
const cors = require('cors')
const multer = require('multer') // For handling file uploads
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

// Get all products
app.get('/api/products', (req, res) => {
    db.query('SELECT * FROM products', (err, result) => {
        if (err) throw err
        res.json(result)
    })
})

// Add a product (either with image URL or uploaded image)
app.post('/api/products', upload.single('image'), (req, res) => {
    const {
        title,
        price,
        description,
        category,
        seo_meta,
        payment_id,
        image_url,
    } = req.body
    let image = null

    // If the image file is uploaded, set it
    if (req.file) {
        image = req.file.buffer // Store the image as a buffer in the database
    }

    // Validate that the title and price fields are not empty
    if (!title || !price) {
        return res.status(400).json({ error: 'Title and price are required.' })
    }

    // Insert the product into the database
    db.query(
        'INSERT INTO products (title, price, description, category, seo_meta, payment_id, image_url, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [
            title,
            price,
            description,
            category,
            seo_meta,
            payment_id,
            image_url,
            image,
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
app.listen(3082, '0.0.0.0', () => console.log('Server started on port 3082'))

/* 

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    category VARCHAR(255),
    seo_meta TEXT,  -- for SEO meta information
    payment_id VARCHAR(255),
    image_url VARCHAR(255),  -- URL for the product image
    image BLOB,  -- Binary data for the product image if stored directly
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

*/
