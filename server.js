const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON (Fixes undefined req.body issue)
app.use(express.json());

// Serve static files from "public"
app.use(express.static("public"));

// Handle location data from the client
app.post("/location", (req, res) => {
    const { latitude, longitude } = req.body;

    // Debugging: Log the request body to check if it's received
    console.log("Received data:", req.body);

    if (latitude && longitude) {
        res.json({ message: "Location received!", latitude, longitude });
    } else {
        res.status(400).json({ error: "Invalid location data" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});