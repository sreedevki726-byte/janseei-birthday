const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const content = document.getElementById("content");

startBtn.addEventListener("click", function () {
    intro.style.display = "none";
    content.style.display = "block";

    startHearts();
});

function startHearts() {
    setInterval(function () {
        const heart = document.createElement("div");

        heart.className = "heart";

        const symbols = ["❤️", "💗", "💕", "💖", "💘", "✨"];

        heart.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize =
            (15 + Math.random() * 20) + "px";
        heart.style.animationDuration =
            (5 + Math.random() * 5) + "s";

        document.body.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, 10000);

    }, 500);
}
