import React, { useState, useEffect } from "react";
import "./History.css";

function History() {
    // State to store history data
    const [history, setHistory] = useState([]);

    // Fetch history data from backend
    useEffect(() => {
        fetch("http://localhost:5000/api/history")
            .then((response) => response.json())
            .then((data) => setHistory(data))
            .catch((error) => console.error("Error fetching history:", error));
    }, []);

    return (
        <div className="history">
            <h2>URL Shortening History</h2>
            <div className="history-list">
                {/* Render dynamic history items */}
                {history.length > 0 ? (
                    history.map((item, index) => (
                        <div className="history-item" key={index}>
                            <p>Original URL: {item.originalUrl}</p>
                            <p>Shortened URL: {item.shortUrl}</p>
                            <p>Clicks: {item.clicks}</p>
                        </div>
                    ))
                ) : (
                    <p>No history available.</p>
                )}
            </div>
        </div>
    );
}

export default History;