
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
        subtitle: "Identifying Core Problems",
        description: "I given full freedom to decide the project’s focus, so I began by evaluating the existing webshop using heuristic analysis and quick user feedback sessions. The most critical issues emerged around navigation and product discovery, clarity of product information and purchase model, and overall brand coherence. These became the main areas I prioritized for redesign.",
    },
    {
        type: "text",
        subtitle: "navigation",
        description: "The original mobile navigation felt cluttered and inconsistent, mixing articles, blog posts, and products under unclear labels. I reduced the number of categories to four to create a more focused structure with fewer distractions. This helped users quickly understand where to go and made the browsing experience feel calmer and more intentional.",
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
        subtitle: "Product showcase & pricing",
        description: "I added lifestyle previews to show the product in action and encourage clicks. A clickable rating next to the title directs users to reviews faster. I clarified pricing by showing cost per sachet, and made the total order cost, any gift offers, and delivery details very prominent — reducing surprises and building trust.",
    },
    {
        type: "text",
        subtitle: "Information Hierarchy",
        description: "The challenge was that Absolute Collagen’s site had a wealth of content, but it was overwhelming and hard to navigate. I restructured the product information based on a user card-sorting exercise, categorizing content where users expected to find it. I added bullet points for quick scanning and combined ingredient details with usage instructions, addressing a key need for clarity. I also created product highlights and infographics to showcase the supplement’s benefits and results, establishing a clear hierarchy and making the page both informative and visually digestible.",
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
        subtitle: "Brand consistency",
        description: "I noticed the brand had multiple visual directions across the site, so I streamlined it by choosing a single primary yellow, unifying buttons, icons, and typography, and designing flexible assets for infographics and social media. The goal was a clean, modern look with a luxurious feel, making the site consistent, engaging, and accessible for the audience.",
    },
    {
        type: "text",
        subtitle: "...AND DONE!",
        description: "Refining an existing, content-rich brand—improving clarity, consistency, and engagement—can be harder than starting from scratch, but it’s also incredibly rewarding. I approached it strategically. There was a huge amount of invisible work in this project, from UX standards alignment and competitor analysis to technical considerations.",
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