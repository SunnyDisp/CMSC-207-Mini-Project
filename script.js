// Define button elements
const switchBtn = document.querySelector("#button__switch");
const backBtn = document.querySelector("#button__back");
const startBtn = document.querySelector("#button__start");

// Define about elements
const aboutElements = {
    message: document.querySelector(".about__image-title"),
    photo: document.querySelector(".about__image-photo"),
    class: document.querySelector(".about__class"),
    guild: document.querySelector(".about__guild"),
    quest: document.querySelector(".about__quest"),
    skills: document.querySelector(".about__skills"),
    objective: document.querySelector(".about__objective"),
    sidekick: document.querySelector(".about__sidekick"),
    oath: document.querySelector(".about__oath")
};

// Define player profiles
const playerProfiles = {
    sannie: {
        name: "SANNIE AGNES",
        image: "images/profile.png",
        class: "Aspiring Web Developer",
        guild: "UPOU Diploma in Computer Science",
        quest: "Mastering Web Development",
        skills: "Administration & Finance, HTML, CSS, JavaScript",
        objective: "Gain the skills needed to level up workplace efficiency with tech solutions",
        sidekick: "Goldie, a loyal companion and always on the lookout for snacks",
        oath: "Sweet! Let's get pizza after this quest, your treat of course!"
    },

    lichKing: {
        name: "THE LICH KING",
        image: "images/lich.jpg",
        class: "Undead Sorcerer of Doom",
        guild: "Harbingers of the End",
        quest: "The total annihilation of all life",
        skills: "Necromancy, Mind Control, Immortality",
        objective: "Erase all existence, including you, foolish mortal",
        sidekick: "Minions of the Void that consume all life forms, starting with you",
        oath: "Choose another player. Lest your story end before it even begins."
    }
};

// Logic to update profile content
function updateContent(profile) {
    aboutElements.message.textContent = profile.name;
    aboutElements.photo.style.backgroundImage = `url('${profile.image}')`;
    aboutElements.photo.style.backgroundSize = "cover";
    aboutElements.photo.style.backgroundPosition = "center";
    aboutElements.class.innerHTML = `<span>CLASS:</span> ${profile.class}`;
    aboutElements.guild.innerHTML = `<span>GUILD:</span> ${profile.guild}`;
    aboutElements.quest.innerHTML = `<span>QUEST:</span> ${profile.quest}`;
    aboutElements.skills.innerHTML = `<span>SKILLS:</span> ${profile.skills}`;
    aboutElements.objective.innerHTML = `<span>OBJECTIVE:</span> ${profile.objective}`;
    aboutElements.sidekick.innerHTML = `<span>SIDEKICK:</span> ${profile.sidekick}`;
    aboutElements.oath.innerHTML = `<span>HERO'S OATH:</span> ${profile.oath}`;
}

// Logic for swapping players
function switchPlayer() {
    if (aboutElements.message.textContent === playerProfiles.sannie.name) {
        updateContent(playerProfiles.lichKing);
    } else {
        updateContent(playerProfiles.sannie);
    }
}

// Event listeners for buttons
switchBtn.addEventListener("click", switchPlayer);
backBtn.addEventListener("click", () => aboutElements.message.textContent = "For real?");
startBtn.addEventListener("click", () => aboutElements.message.textContent = "Adventure awaits!");

// Define hobbies elements
const photoElements = {
    games: document.querySelector("#photo_games"),
    travel: document.querySelector("#photo_travel"),
    anime: document.querySelector("#photo_anime")
};

// Define photo elements
const swapData = {
    games: ["gta.jpg", "genshin.png"],
    travel: ["singapore.jpg", "malaysia.jpg"],
    anime: ["jojo.png", "demonslayer.jpg"]
};

// Logic for swapping images
function swapImage(element, images) {
    if (!element || !element.src) return;
    element.src = element.src.includes(images[0]) ? `images/${images[1]}` : `images/${images[0]}`;
}

// Event listeners for images
photoElements.games.addEventListener("click", () => swapImage(photoElements.games, swapData.games));
photoElements.travel.addEventListener("click", () => swapImage(photoElements.travel, swapData.travel));
photoElements.anime.addEventListener("click", () => swapImage(photoElements.anime, swapData.anime));
