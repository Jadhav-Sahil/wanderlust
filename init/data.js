const sampleTitles = [
    "Luxury Beach Villa",
    "Mountain Escape Cabin",
    "Modern City Apartment",
    "Desert Safari Camp",
    "Lake View Cottage",
    "Forest Treehouse",
    "Countryside Farmhouse",
    "Snowy Alpine Chalet",
    "Island Paradise Resort",
    "Historic Castle Stay",
    "Riverside Retreat",
    "Skyline Penthouse",
    "Ocean Breeze Bungalow",
    "Vintage Studio Loft",
    "Safari Jungle Lodge",
    "Hidden Valley Retreat",
    "Tropical Palm House",
    "Cliffside Glass Villa",
    "Cozy Downtown Flat",
    "Royal Heritage Mansion"
];

const descriptions = [
    "Escape to a luxurious retreat where comfort meets elegance. This beautiful property offers spacious interiors, stunning views, modern amenities, and a peaceful atmosphere. Whether you're planning a family vacation, a romantic getaway, or a solo adventure, you'll find everything you need for a memorable stay.",

    "Nestled in a breathtaking location, this stay provides the perfect balance between relaxation and adventure. Enjoy beautifully designed living spaces, comfortable bedrooms, and easy access to nearby attractions. Wake up to scenic views and experience hospitality that makes every moment special.",

    "Experience the charm of this unique property, thoughtfully designed to provide a comfortable and unforgettable stay. With stylish interiors, modern conveniences, and a welcoming ambiance, it is an ideal destination for travelers looking to unwind and explore the surrounding area.",

    "Surrounded by natural beauty, this property offers a peaceful escape from the hustle and bustle of everyday life. Enjoy fresh air, scenic landscapes, and cozy accommodations that make you feel right at home. It's the perfect destination for reconnecting with nature and creating lasting memories.",

    "This exceptional stay combines luxury, comfort, and convenience in one remarkable package. Guests can enjoy spacious rooms, premium amenities, and easy access to local attractions. Whether you're here for relaxation or adventure, this property provides an experience you'll never forget.",

    "Step into a world of comfort and sophistication at this stunning property. Featuring thoughtfully designed interiors, modern facilities, and beautiful surroundings, it offers everything needed for a relaxing and enjoyable stay. Perfect for families, couples, and business travelers alike.",

    "Enjoy a truly memorable getaway in this charming accommodation that blends style and comfort effortlessly. Relax in well-appointed spaces, take in picturesque views, and enjoy the convenience of nearby restaurants, attractions, and activities. Every detail has been carefully curated for your comfort.",

    "Located in a prime destination, this property offers guests an extraordinary experience with exceptional amenities and welcoming hospitality. Spend your days exploring the local area and your evenings relaxing in comfort. It's the ideal base for making unforgettable travel memories.",

    "Wake up to stunning surroundings and enjoy a stay filled with comfort, tranquility, and modern conveniences. The property is designed to provide a relaxing atmosphere while keeping you connected to nearby attractions and experiences. Perfect for travelers seeking both adventure and relaxation.",

    "Discover a hidden gem that offers the perfect combination of luxury and charm. From beautifully furnished interiors to breathtaking views and excellent amenities, every aspect of this property has been designed to ensure a comfortable and enjoyable stay for every guest."
];

const locations = [
    { city: "Mumbai", country: "India" },
    { city: "Delhi", country: "India" },
    { city: "Bangalore", country: "India" },
    { city: "Goa", country: "India" },
    { city: "Jaipur", country: "India" },
    { city: "Dubai", country: "UAE" },
    { city: "Paris", country: "France" },
    { city: "London", country: "United Kingdom" },
    { city: "New York", country: "USA" },
    { city: "Tokyo", country: "Japan" }
];

const imageUrls = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1494526585095-c41746248156",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
    "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
];

const userIds = [
    "6a2691968eab839a5e1b59f7",
    "6a268e8ffff5af74a52d89b0",
    "6a268cbc273e2fdcd035af48",
    "6a268c3cd81a1c6cd0010c82"
];

// GeoJSON coordinates [longitude, latitude]
const coordinatesMap = {
    Mumbai: [72.8777, 19.0760],
    Delhi: [77.1025, 28.7041],
    Bangalore: [77.5946, 12.9716],
    Goa: [73.8278, 15.2993],
    Jaipur: [75.7873, 26.9124],
    Dubai: [55.2708, 25.2048],
    Paris: [2.3522, 48.8566],
    London: [-0.1276, 51.5072],
    "New York": [-74.0060, 40.7128],
    Tokyo: [139.6917, 35.6895]
};

const sampleListings = [];

for (let i = 1; i <= 50; i++) {

    const randomTitle =
        sampleTitles[Math.floor(Math.random() * sampleTitles.length)];

    const randomDescription =
        descriptions[Math.floor(Math.random() * descriptions.length)];

    const randomLocation =
        locations[Math.floor(Math.random() * locations.length)];

    const randomImage =
        imageUrls[Math.floor(Math.random() * imageUrls.length)];

    const randomPrice =
        Math.floor(Math.random() * 5000) + 1000;

    const randomOwner =
        userIds[Math.floor(Math.random() * userIds.length)];

    const coords = coordinatesMap[randomLocation.city] || [0, 0];

    // Category Assignment
    let category = "room";

    if (randomTitle.includes("Mountain")) {
        category = "mountain";
    }
    else if (randomTitle.includes("Castle")) {
        category = "castle";
    }
    else if (randomTitle.includes("Farm")) {
        category = "farm";
    }
    else if (
        randomTitle.includes("Safari") ||
        randomTitle.includes("Jungle")
    ) {
        category = "camping";
    }
    else if (
        randomTitle.includes("Beach") ||
        randomTitle.includes("Ocean") ||
        randomTitle.includes("Resort")
    ) {
        category = "amazing_pool";
    }
    else if (
        randomTitle.includes("City") ||
        randomTitle.includes("Downtown") ||
        randomTitle.includes("Penthouse")
    ) {
        category = "iconic_city";
    }
    else if (
        randomTitle.includes("Snowy")
    ) {
        category = "arctic";
    }
    else {
        category = "trending";
    }

    sampleListings.push({
        title: `${randomTitle} ${i}`,

        description: randomDescription,

        image: {
            url: `${randomImage}?w=800&auto=format&fit=crop&q=60&sig=${i}`,
            filename: `listing-${i}`
        },

        price: randomPrice,

        location: randomLocation.city,

        country: randomLocation.country,

        category: category,

        owner: randomOwner,

        reviews: [],

        geometry: {
            type: "Point",
            coordinates: coords
        }
    });
}

module.exports = { data: sampleListings };