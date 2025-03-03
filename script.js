// Write the logic for switch button
const switchBtn = document.querySelector("#button__switch");

const aboutMessage = document.querySelector(".about__image-title");
const aboutPhoto = document.querySelector(".about__image-photo");
const aboutClass = document.querySelector(".about__class");
const aboutGuild = document.querySelector(".about__guild");
const aboutQuest = document.querySelector(".about__quest");
const aboutSkills = document.querySelector(".about__skills");
const aboutObjective = document.querySelector(".about__objective");
const aboutSidekick = document.querySelector(".about__sidekick");
const aboutOath = document.querySelector(".about__oath");

function switchPlayer() {
    if (aboutMessage.innerHTML === "SANNIE AGNES") {
        
        // Change Name
        aboutMessage.innerHTML = "THE LICH KING";

        // Change Image
        aboutPhoto.style.backgroundImage = "url('images/lich.jpg')";
        aboutPhoto.style.backgroundSize = "cover"; // Ensures image fits well
        aboutPhoto.style.backgroundPosition = "center";

        // Change Class
        aboutClass.innerHTML = "<span>CLASS:</span> Undead Sorcerer of Doom";

        // Change Guild
        aboutGuild.innerHTML = "<span>GUILD:</span> Harbingers of the End";

        // Change Quest
        aboutQuest.innerHTML = "<span>QUEST:</span> The total annihilation of all life";

        // Change Skills
        aboutSkills.innerHTML = "<span>SKILLS:</span> Necromancy, Mind Control, Immortality";

        // Change Objective
        aboutObjective.innerHTML = "<span>OBJECTIVE:</span> Erase all existence, including you, foolish mortal";

        // Change Sidekick
        aboutSidekick.innerHTML = "<span>SIDEKICK:</span> Minions of the Void that consume all life forms, starting with you";

        // Change Oath
        aboutOath.innerHTML = "<span>HERO'S OATH:</span> Choose another player. Lest your story end before it even begins.";
    } else {
        
        // Change Name
        aboutMessage.textContent = "SANNIE AGNES";

        // Change Image
        aboutPhoto.style.backgroundImage = "url('images/profile.png')";
        aboutPhoto.style.backgroundSize = "cover";
        aboutPhoto.style.backgroundPosition = "center";

        // Change Class
        aboutClass.innerHTML = "<span>CLASS:</span> Aspiring Web Developer";

        // Change Guild
        aboutGuild.innerHTML = "<span>GUILD:</span> UPOU Diploma in Computer Science";

        // Change Quest
        aboutQuest.innerHTML = "<span>QUEST:</span> Mastering Web Development";

        // Change Skills
        aboutSkills.innerHTML = "<span>SKILLS:</span> Administration & Finance, HTML, CSS, JavaScript";

        // Change Objective
        aboutObjective.innerHTML = "<span>OBJECTIVE:</span> Gain the skills needed to level up workplace efficiency with tech solutions";

        // Change Sidekick
        aboutSidekick.innerHTML = "<span>SIDEKICK:</span> Goldie, a loyal companion and always on the lookout for snacks";

        // Change Oath
        aboutOath.innerHTML = "<span>HERO'S OATH:</span> Sweet! Let's get pizza after this quest, your treat of course!";
    }
}

switchBtn.addEventListener("click", switchPlayer);

// Write the logic for the back button
const backBtn = document.querySelector("#button__back");

backBtn.addEventListener("click", () => {
    aboutMessage.textContent = "For real?";
});

// Write the logic for the start button
const startBtn = document.querySelector("#button__start");

startBtn.addEventListener("click", () => {
    aboutMessage.textContent = "Adventure awaits!";
});

// Write the logic to swap video game images
const photoGames = document.querySelector("#photo_games");
const photoTravel = document.querySelector("#photo_travel");
const photoAnime = document.querySelector("#photo_anime");

function swapImage(selectedImg, img1, img2) {
    if (!selectedImg || !selectedImg.src) return; // Prevents errors if elements are missing

    if (selectedImg.src.includes(img1)) {
        selectedImg.src = `images/${img2}`;
    } else {
        selectedImg.src = `images/${img1}`;
    }
}

photoGames?.addEventListener("click", () => {
    swapImage(photoGames, "gta.jpg", "genshin.png");
});

photoTravel?.addEventListener("click", () => {
    swapImage(photoTravel, "singapore.jpg", "malaysia.jpg");
});

photoAnime?.addEventListener("click", () => {
    swapImage(photoAnime, "jojo.png", "demonslayer.jpg");
});
