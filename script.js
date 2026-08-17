const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const content = document.getElementById("content");
const birthdayMusic = document.getElementById("birthdayMusic");

startBtn.addEventListener("click", function () {

    intro.style.display = "none";
    content.style.display = "block";

    // Start birthday music after the user's tap
    birthdayMusic.volume = 0.7;
    birthdayMusic.play().catch(function () {
        console.log("Music could not start.");
    });

    startHearts();
    startConfetti();
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


function startConfetti() {

    const confettiContainer = document.getElementById("confetti");

    const symbols = ["🎉", "✨", "💗", "💕", "❤️", "🎀"];

    for (let i = 0; i < 50; i++) {

        const piece = document.createElement("div");

        piece.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        piece.style.position = "fixed";
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.top = "-30px";
        piece.style.fontSize =
            (15 + Math.random() * 20) + "px";

        piece.style.zIndex = "50";
        piece.style.pointerEvents = "none";

        piece.style.animation =
            "confettiFall " + (3 + Math.random() * 3) + "s linear forwards";

        confettiContainer.appendChild(piece);

        setTimeout(function () {
            piece.remove();
        }, 6500);
    }
}
