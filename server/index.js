const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch'); // You might need to install node-fetch
const app = express();
app.use(bodyParser.json());
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
require('dotenv').config();

app.use(cors());

app.get('/api/nearbyvets', async (req, res) => {
    const { lat, lng } = req.query;
    const apiKey = process.env.GOOGLE_MAPS_API_KEY; // Secure your API key
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=5000&type=veterinary_care&key=${apiKey}`;

    try {
        const apiRes = await fetch(url);
        const data = await apiRes.json();
        res.send(data);
    } catch (error) {
        console.error("Error fetching nearby vets:", error);
        res.status(500).send("Error fetching data");
    }
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (users[username] && users[username] === password) {
      res.status(200).send({ message: "Login successful" });
    } else {
      res.status(401).send({ message: "Invalid credentials" });
    }
  });

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});