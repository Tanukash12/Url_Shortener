import React, { useState } from "react";
import "./UrlShortenerForm.css";

const UrlShortenerForm = () => {
    const [originalUrl, setOriginalUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate URL before sending request
        if (!originalUrl.startsWith("http://") && !originalUrl.startsWith("https://")) {
            setError("Please enter a valid URL (starting with http:// or https://)");
            return;
        }

        try {
            // Simulate API call
            const data = { shortUrl: `http://localhost:5000/${Math.random().toString(36).substring(7)}` };
            setShortUrl(data.shortUrl);
            setError(null);
        } catch (err) {
            console.error("API Error:", err);
            setError("Something went wrong. Try again later.");
        }
    };

    return (
        <div className="url-shortener-form">
            <h2>Type the URL to be shortened</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Enter URL"
                    value={originalUrl}
                    onChange={(e) => setOriginalUrl(e.target.value)}
                    required
                />
                <button type="submit">Shorten</button>
            </form>

            {error && <p className="error">{error}</p>}

            {shortUrl && (
                <div className="shortened-url">
                    <p>
                        Shortened URL:{" "}
                        <a href={shortUrl} target="_blank" rel="noopener noreferrer">
                            {shortUrl}
                        </a>
                    </p>
                </div>
            )}
        </div>
    );
};

export default UrlShortenerForm;