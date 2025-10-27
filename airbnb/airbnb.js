const projects = [
    {
        image: "airbnb-intro.png",
        size: "large",
        type: "image"
    },
    {
        size: "thirty",
        type: "text",
        content: `
        <h1> D&AD Brief for Airbnb (2023)</h1>
        
               
                <b> BRIEF </b>
                <br>

                 Airbnb was looking for new ways to turn digital connection into meaningful in‑real‑life experiences using Airbnb’s existing assets.
                Specifically targeting Gen Z’s loneliness epidemic (~73% report feeling isolated), and use tech to bring them closer.
                <br><br>
                <b> CONCEPT</b> 
                <br>               
                Airbnb Circles is a new system that organizes experiences, hosts, and travelers into <b> emotionally resonant identity “clubs” called Circles.</b>
                Each Circle—like <i>Dark Enclave, Glam Squad,</i> or <i>Soulful Seeker</i>—represents a <b>distinct aesthetic and lifestyle</b>, helping users find their people and their vibe wherever they go.<br>
                Strategy was to hook the users with a quiz that helps them discover which Airbnb Circle best fits their personality and travel style, 
                with a promise of access to curated experiences, events, and people that truly resonate with them.
        `
    },
    
    {
        image: "quiz-big-picture.png",
        size: "seventy",
        type: "image" 
    },

      {
        image: "users.png",
        size: "large",
        type: "image" 
    },

    {
        image: "circles.png",
        size: "large",
        type: "image" 
    },


    {
        image: "airbnb-filters.png",
        size: "seventy",
        type: "image"
    },

     {
        image: "airbnb-filters.png",
        size: "thirty",
        type: "text",
        content: `
            <b> RELAVENT EXPERIENCES FILTERS</b>
            <br><br>
             Instead of choosing from generic filters like “Food & Drink” or “Arts,” users take a short quiz to join a Circle and unlock curated travel content, events, and meetups that match their personality.<br><br>
        This transforms Airbnb from a booking platform into a lifestyle companion—one that fosters belonging, sparks real-life connection, and turns solo travel into a shared emotional journey.
        `
    },

    {
        image: "airbnb-map.png",
        size: "seventy",
        type: "image"
    },

       {
        image: "airbnb-filters.png",
        size: "thirty",
        type: "text",
        content: `
            <b> IMPACT</b>
            <br><br>
             The entry was not awarded in D&AD competition. A similar concept with the same name was recognised as a winner.`
    }, 

  


  
    // rest as before...
];

function createTiles() {
    const gridContainer = document.getElementById("grid-container"); 

    projects.forEach(project => {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item", project.size);

        if (project.type === "image") {
            const img = document.createElement("img");
            img.src = project.image;
            img.loading = "lazy";
            gridItem.appendChild(img);
        } else if (project.type === "text") {
            // Use innerHTML if your content has HTML tags like <h2>, <p>
            gridItem.innerHTML = project.content;
            // Optional: add a class for text styling
            gridItem.classList.add("project-description-graphic-design");
        }

        gridContainer.appendChild(gridItem);
    });
}


// Call the function to create tiles
createTiles();
