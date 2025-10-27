// PHOTOES FOR DARKER TALES PROJECT
const projects = [
    {
        image: "ac-mockup.jpg", // Original image path
        size: "half",  
    },
    {
        image: "ac-nav.mp4", // Original image path
        size: "half",
    },
    {
        image: "ac-old-vs-new.png", // Original image path
        size: "large",
    },
    {
        image: "branding-ac.png",
        size: "half", 
    },

    {
        image: "ac-review.jpg",
        size: "half", 
    },
    // Add more projects as needed...
];

// Function to create and append tiles to the grid
function createTiles() {
    const gridContainer = document.getElementById("grid-container"); 

    projects.forEach(project => {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item", project.size); // Add size class

        // Check file extension to determine whether it's an image or video
        const ext = project.image.split('.').pop().toLowerCase();

        let media;

        if (ext === 'mp4') {
            // Create video element
            media = document.createElement("video");
            media.src = project.image;
            media.autoplay = true;
            media.loop = true;
            media.muted = true;
            media.playsInline = true;
            media.loading = "lazy";
            media.style.width = "100%";
            media.style.objectFit = "cover";
        } else {
            // Create image element
            media = document.createElement("img"); 
            media.src = project.image; // Original image
            media.loading = "lazy"; // Add lazy loading
        }

        // Append image or video to the grid item
        gridItem.appendChild(media);
        gridContainer.appendChild(gridItem);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    createTiles();

});
