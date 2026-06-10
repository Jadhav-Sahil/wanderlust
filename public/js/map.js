document.addEventListener("DOMContentLoaded", function () {

    const mapDiv = document.getElementById("map");

    if (!mapDiv) return;

    const listing = JSON.parse(mapDiv.dataset.listing);

    console.log("Listing:", listing);
    console.log("Geometry:", listing.geometry);

    let lat = 18.5204;
    let lng = 73.8567;

    if (listing?.geometry?.coordinates?.length === 2) {
        lng = listing.geometry.coordinates[0];
        lat = listing.geometry.coordinates[1];
    }

    const map = L.map("map").setView([lat, lng], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors"
    }).addTo(map);

    L.marker([lat, lng])
        .addTo(map)
        .bindPopup(listing.title)
        .openPopup();
});