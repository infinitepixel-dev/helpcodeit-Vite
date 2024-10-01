import { useState } from 'react'
import propTypes from 'prop-types'
import { loadStripe } from '@stripe/stripe-js'
import {
    Elements,
    useStripe,
    useElements,
    CardElement,
    // TODO: Add PaymentElement
} from '@stripe/react-stripe-js'
import { useNavigate } from 'react-router-dom' // To handle navigation
import { gsap } from 'gsap'

// Load Stripe with your publishable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

const apiUrl = `${window.location.protocol}//${window.location.hostname}:3082/api/payment`

const CheckoutForm = ({ cartItems }) => {
    const stripe = useStripe()
    const elements = useElements()
    const [loading, setLoading] = useState(false)
    const [paymentStatus, setPaymentStatus] = useState(null)
    const navigate = useNavigate() // For redirecting on successful payment

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) return

        setLoading(true)

        // Request payment intent from your backend with cart item total
        const totalAmountCents = calculateTotalInCents(cartItems)
        const data = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount: totalAmountCents, // Send the amount in cents to Stripe
                currency: 'usd',
                description: 'Your purchase description',
            }),
        })

        const dataResponse = await data.json()
        console.log('Stripe response: ', dataResponse)

        const cardElement = elements.getElement(CardElement)
        const { error, paymentIntent } = await stripe.confirmCardPayment(
            dataResponse.clientSecret,
            {
                payment_method: {
                    card: cardElement,
                },
            }
        )

        if (error) {
            setPaymentStatus('failed')
        } else if (paymentIntent.status === 'succeeded') {
            setPaymentStatus('success')
        } else {
            setPaymentStatus('pending')
        }

        setLoading(false)
        showModal() // Trigger GSAP modal animation
    }

    const calculateTotalInDollars = (cartItems) => {
        return cartItems
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2) // Round to 2 decimal places for display
    }

    const calculateTotalInCents = (cartItems) => {
        return Math.round(
            cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
            ) * 100
        ) // Convert dollars to cents and round
    }

    // Show the modal on Pay
    const showModal = () => {
        gsap.to('.payment-modal', {
            opacity: 1,
            visibility: 'visible',
            scale: 1,
            duration: 0.5,
            ease: 'power2.out',
        })
    }

    // Hide the modal on Ok, clicking outside, or pressing Esc
    const hideModal = () => {
        gsap.to('.payment-modal', {
            opacity: 0,
            visibility: 'hidden',
            scale: 0.5,
            duration: 0.5,
            ease: 'power2.in',
        })
    }

    // Handle the "OK" button click based on payment status
    const handleOkClick = () => {
        hideModal()
        if (paymentStatus === 'success') {
            navigate('/dashboard') // Redirect to dashboard after successful payment
        }
    }

    console.log('cartItems:', cartItems)

    return (
        <>
            {/* if carItems is empty */}
            {`${cartItems.length}` > 0 ? (
                <>
                    <form
                        onSubmit={handleSubmit}
                        className="rounded-md p-8 shadow-md"
                    >
                        {/* Card Element */}
                        <CardElement className="rounded-md border  p-4" />

                        <button
                            type="submit"
                            disabled={!stripe || loading}
                            className={`mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white shadow transition hover:bg-blue-700 ${
                                loading ? 'cursor-not-allowed opacity-50' : ''
                            }`}
                        >
                            {loading
                                ? 'Processing...'
                                : `Pay $${calculateTotalInDollars(cartItems)}`}
                        </button>
                    </form>

                    <div className="payment-modal invisible fixed inset-0 flex scale-50 items-center justify-center bg-black bg-opacity-50 text-black opacity-0">
                        <div className="rounded-lg bg-white p-8 text-center shadow-lg">
                            <h2 className="mb-4 text-2xl font-bold">
                                {paymentStatus === 'success' &&
                                    'Payment Successful!'}
                                {paymentStatus === 'failed' &&
                                    'Payment Failed!'}
                                {paymentStatus === 'pending' &&
                                    'Payment Processing!'}
                            </h2>
                            <p className="mb-4">
                                {paymentStatus === 'success' &&
                                    'Your payment has been processed successfully.'}
                                {paymentStatus === 'failed' &&
                                    'There was an issue with your payment. Please try again.'}
                                {paymentStatus === 'pending' &&
                                    'Your payment is currently being processed. Please wait.'}
                            </p>
                            <button
                                className="rounded-lg bg-blue-500 px-4 py-2 text-white shadow transition hover:bg-blue-700"
                                onClick={handleOkClick}
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <div className="text-center">
                    <p className="mb-4">Your cart is empty.</p>
                    <button
                        className="rounded-lg bg-blue-500 px-4 py-2 text-white shadow transition hover:bg-blue-700"
                        onClick={() => navigate('/merch')}
                    >
                        Go Shopping
                    </button>
                </div>
            )}
        </>
    )
}

// eslint-disable-next-line react/prop-types, no-unused-vars
function CheckoutPage({ cartItems, clearCart }) {
    return (
        <Elements stripe={stripePromise}>
            <div className="flex min-h-screen items-center justify-center bg-gray-50">
                <div className="w-full max-w-md">
                    <h2 className="mb-8 text-center text-2xl font-bold">
                        Checkout
                    </h2>
                    <CheckoutForm cartItems={cartItems} />
                </div>
            </div>
        </Elements>
    )
}

CheckoutForm.propTypes = {
    cartItems: propTypes.array.isRequired,
}

CheckoutPage.propTypes = {
    cartItems: propTypes.array.isRequired,
}

export default CheckoutPage
