const axios = require("axios");

async function getGeometry(location, country) {
    const query = `${location}, ${country}`;

    const response = await axios.get(
        "https://nominatim.openstreetmap.org/search",
        {
            params: {
                q: query,
                format: "json",
                limit: 1
            },
            headers: {
                "User-Agent": "Wanderlust-App/1.0"
            }
        }
    );

    if (!response.data || response.data.length === 0) {
        throw new Error("Location not found");
    }

    const data = response.data[0];

    return {
        type: "Point",
        coordinates: [
            parseFloat(data.lon),
            parseFloat(data.lat)
        ]
    };
}

module.exports = getGeometry;