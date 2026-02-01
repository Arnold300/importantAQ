const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const surprise = document.getElementById("surprise");

// When YES is clicked
yesBtn.addEventListener("click", () => {
    surprise.style.display = "block";
});

// Make NO button run away
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

