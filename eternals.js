// Define an array of Eternals characters
const eternalsCharacters = [
    {
        heroName: "Ikaris",
        Skills: ["Superhuman strength", "Flight", "Heat vision"]
    },
    {
        heroName: "Sersi",
        Skills: ["Matter manipulation", "Telekinesis", "Immortality"]
    },
    {
        heroName: "Thena",
        Skills: ["Superhuman strength", "Combat skills", "Near-immortality"]
    },
    {
        heroName: "Kingo",
        Skills: ["Swordsmanship", "Hand-to-hand combat", "Energy blasts"]
    },
    {
        heroName: "Gilgamesh",
        Skills: ["Superhuman strength", "Durability", "Cosmic exoskeleton"]
    }
];

const eternalsImg = [
    "ikaris.jpg",
    "sersi.jpg",
    "thena.jpg",
    "kingo.jpg",
    "gilgamesh.jpg"
];


// Function to find characters with a specific skill
function findSkills() {
    // Get the user input
    const skillInput = document.querySelector("#heroSkill").value.toLowerCase();

    if (skillInput === "") {
        document.querySelector("#selectedHero").textContent = "Please enter a skill.";
        return; 
    }


    // Array to store selected heroes
    const selectedHeroes = [];

    // Find heroes using the forEach method
    eternalsCharacters.forEach((hero) => {
        if (hero.Skills.some((skill) => skill.toLowerCase().includes(skillInput))) {
            selectedHeroes.push(hero);
        }
    });

    // Display the selected hero info on the webpage
    const selectedHeroOutput = document.querySelector("#selectedHero");
    const heroImagesContainer = document.querySelector("#heroImages"); 

    selectedHeroOutput.innerHTML = ""; 
    heroImagesContainer.innerHTML = ""; 

    if (selectedHeroes.length > 0) {
        // If there are selected heroes, display their information
        selectedHeroes.forEach((hero) => {
            const heroInfo = document.createElement("p");
            heroInfo.innerHTML = `Hero Name: ${hero.heroName}<br>Skills: ${hero.Skills.join(", ")}`;
        
            // Display the hero image
            const heroImage = document.createElement("img");
            heroImage.src = eternalsImg.find((img) => img.includes(hero.heroName.toLowerCase()));
            heroImage.alt = hero.heroName;
            //style images to use universal width
            heroImage.style.width = "350px"; 
            heroImage.style.height = "250px";
        
            // Append the hero info and image to selectedHeroOutput
            selectedHeroOutput.appendChild(heroInfo);
            selectedHeroOutput.appendChild(heroImage);
        });
    } else {
        // If no heroes match the criteria, display a error message
        selectedHeroOutput.textContent = "No heroes have the specified skill.";
    }
}

// Event listener for the "Find Skills" button
document.querySelector("#findSkills").addEventListener("click", findSkills);
