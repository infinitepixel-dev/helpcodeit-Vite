// CookieConsent.jsx
import React, { useState, useEffect } from 'react';
import './CookieConsent.css';

function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="cookie-consent-banner">
            <p>
                We use cookies to enhance your experience, and annoy you less. By continuing to visit this site you agree to our use of cookies.
            </p>
            <button onClick={handleAccept}>Accept</button>
        </div>
    );
}

export default CookieConsent;