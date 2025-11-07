
const projects = [
    {
        type: "media",
        image: "ac-mockup-closeup.png",
        size: "half",
    },
    {
        type: "media",
        image: "ac-nav.mp4",
        size: "half",
    },



    {
        type: "text",
        subtitle: "design",
        description: "description1",
    },
    {
        type: "text",
        subtitle: "my design",
        description: "description1",
    },



    {
        type: "media",
        image: "product_page.jpg",
        size: "half",
    },
    {
        type: "media",
        image: "info_ac_square.mp4",
        size: "half",
    },


        {
        type: "text",
        subtitle: "design",
        description: "description1",
    },
    {
        type: "text",
        subtitle: "my design",
        description: "description1",
    },




    {
        type: "media",
        image: "ac_type.jpg",
        size: "half",
    },
    {
        type: "media",
        image: "assets_dark.jpg",
        size: "half",
    },


        {
        type: "text",
        subtitle: "design",
        description: "description1",
    },
    {
        type: "text",
        subtitle: "my design",
        description: "description1",
    },

];

// Function to create and append tiles to the grid
function createTiles() {
    const gridContainer = document.getElementById("grid-container");

    projects.forEach(project => {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        if (project.size) gridItem.classList.add(project.size);

        if (project.type === "media") {
            // IMAGE OR VIDEO
            const ext = project.image.split('.').pop().toLowerCase();
            let media;

            if (ext === 'mp4') {
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
                media = document.createElement("img");
                media.src = project.image;
                media.loading = "lazy";
            }

            gridItem.appendChild(media);

        } else if (project.type === "text") {
            // TEXT SECTION
            const textWrapper = document.createElement("div");
            textWrapper.classList.add("project-text-wrapper");

            // Subtitle
            if (project.subtitle) {
                const subtitle = document.createElement("div");
                subtitle.classList.add("project-subtitle");
                subtitle.textContent = project.subtitle;
                textWrapper.appendChild(subtitle);
            }

            // Description
            if (project.description) {
                const descDiv = document.createElement("div");
                descDiv.textContent = project.description;
                textWrapper.appendChild(descDiv);
            }

            gridItem.appendChild(textWrapper);
        }

        gridContainer.appendChild(gridItem);
    });
}

document.addEventListener("DOMContentLoaded", createTiles);

//CSS for this is in style.css and all should be under coment "AC styling section"