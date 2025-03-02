// Write the logic for switch button
const aboutMessage = document.querySelector("#about__message");
const aboutPhoto = document.querySelector(".about__image-profile");
const switchBtn = document.querySelector("#button__switch");
const aboutName = document.querySelector("#about__bullet-name");
const aboutClass = document.querySelector("#about__bullet-class");
const aboutGuild = document.querySelector("#about__bullet-guild");
const aboutQuest = document.querySelector("#about__bullet-quest");
const aboutSkills = document.querySelector("#about__bullet-skills");
const aboutObjective = document.querySelector("#about__bullet-objective");
const aboutSidekick = document.querySelector("#about__bullet-sidekick");

function switchPlayer() {
    if (aboutMessage.innerHTML === "Sweet! Let's get pizza after this quest, your treat of course!") {
        
        // Change Quote
        aboutMessage.innerHTML = "Choose another character, lest you invite your own doom.";

        // Change Image
        aboutPhoto.style.backgroundImage = "url('images/lich.jpg')";

        // Change Name
        aboutName.innerHTML = "<span>NAME:</span> The Lich</span>";

        // Change Class
        aboutClass.innerHTML = "<span>CLASS:</span> Undead Sorcerer of Doom";

        // Change Guild
        aboutGuild.innerHTML = "<span>GUILD:</span> Harbingers of the End";

        // Change Quest
        aboutQuest.innerHTML = "<span>QUEST:</span> The total annihilation of all life";

        // Change Skills
        aboutSkills.innerHTML = "<span>SKILLS:</span> Necromancy, Mind Control, Reality Manipulation, Immortality";

        // Change Objective
        aboutObjective.innerHTML = "<span>OBJECTIVE:</span> Erase all existence, including you, the foolish mortal attempting to choose me";

        // Change Sidekick
        aboutSidekick.innerHTML = "<span>SIDEKICK:</span> Minions of the Void that consume all life forms, starting with you"
        
    } else {
        
        // Change Quote
        aboutMessage.innerHTML = "Sweet! Let's get pizza after this quest, your treat of course!";

        // Change Image
        aboutPhoto.style.backgroundImage = "url('images/profile.png')";

        // Change Name
        aboutName.innerHTML = "<span>NAME:</span> Sannie Agnes Genito</span>";

        // Change Class
        aboutClass.innerHTML = "<span>CLASS:</span> Aspiring Web Developer";

        // Change Guild
        aboutGuild.innerHTML = "<span>GUILD:</span> UPOU Diploma in Computer Science";

        // Change Quest
        aboutQuest.innerHTML = "<span>QUEST:</span> Mastering Web Development";

        // Change Skills
        aboutSkills.innerHTML = "<span>SKILLS:</span> Administration & Finance, HTML, CSS, Javascript";

        // Change Objective
        aboutObjective.innerHTML = "<span>OBJECTIVE:</span> Gain the skills needed to level up workplace efficiency with tech solutions";

        // Change Sidekick
        aboutSidekick.innerHTML = "<span>SIDEKICK:</span> Goldie, a loyal companion and always on the lookout for snacks"
    }
}

switchBtn.addEventListener("click", () => {
    switchPlayer();
})

// Write the logic for the back button
const backBtn = document.querySelector("#button__back");

backBtn.addEventListener("click", () => {
    aboutMessage.innerHTML = "Are you sure you want to go back home?"
})

// Write the logic for the start button
const startBtn = document.querySelector("#button__start");

startBtn.addEventListener("click", () => {
    aboutMessage.innerHTML = "Adventure awaits! Press forward, brave coder."
})

// Write the logic to swap video games image
const photoGames = document.querySelector("#photo_games");
const photoTravel = document.querySelector("#photo_travel");
const photoAnime = document.querySelector("#photo_anime");

function swapImage(selectedImg, img1, img2) {
    if (selectedImg.src.endsWith(img1)) {
        selectedImg.src = `images/${img2}`;
    } else {
        selectedImg.src = `images/${img1}`;
    }
}

photoGames.addEventListener("click", () => {
    swapImage(photoGames, "gta.jpg", "genshin.png");
});

photoTravel.addEventListener("click", () => {
    swapImage(photoTravel, "singapore.jpg", "malaysia.jpg");
});

photoAnime.addEventListener("click", () => {
    swapImage(photoAnime, "jojo.png", "demonslayer.jpg");
});