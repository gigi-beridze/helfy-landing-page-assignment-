const howItWorksList = document.querySelector(".how-it-works__steps");
const howItWorksPrev = document.getElementById("howItWorksPrev");
const howItWorksNext = document.getElementById("howItWorksNext");
const howItWorksDots = document.getElementById("howItWorksDots");

let howItWorksSlide = 0;

function getVisibleHowItWorksCards() {
    if (window.innerWidth <= 390) {
        return 1;
    }

    if (window.innerWidth <= 1280) {
        return 2;
    }

    return 3;
}

function getMaxHowItWorksSlide() {
    return Math.max(
        0,
        howItWorksList.children.length - getVisibleHowItWorksCards()
    );
}

function createHowItWorksDots() {
    const totalSlides = getMaxHowItWorksSlide() + 1;

    howItWorksDots.innerHTML = "";

    if (window.innerWidth > 1280) {
        return;
    }

    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement("button");

        dot.className = "how-it-works__dot";
        dot.setAttribute("aria-label", `Go to step ${i + 1}`);

        dot.addEventListener("click", () => {
            howItWorksSlide = i;
            updateHowItWorksSlider();
        });

        howItWorksDots.appendChild(dot);
    }
}

function updateHowItWorksSlider() {
    if (window.innerWidth > 1280) {
        howItWorksList.style.transform = "";
        return;
    }

    const card = howItWorksList.children[0];

    if (!card) {
        return;
    }

    const cardWidth = card.offsetWidth;
    const gap = window.innerWidth <= 390 ? 0 : 20;
    const offset = howItWorksSlide * (cardWidth + gap);

    howItWorksList.style.transform = `translateX(-${offset}px)`;

    howItWorksPrev.disabled = howItWorksSlide === 0;
    howItWorksNext.disabled =
        howItWorksSlide === getMaxHowItWorksSlide();

    [...howItWorksDots.children].forEach((dot, index) => {
        dot.classList.toggle(
            "active",
            index === howItWorksSlide
        );
    });
}

howItWorksNext.addEventListener("click", () => {
    if (howItWorksSlide < getMaxHowItWorksSlide()) {
        howItWorksSlide++;
        updateHowItWorksSlider();
    }
});

howItWorksPrev.addEventListener("click", () => {
    if (howItWorksSlide > 0) {
        howItWorksSlide--;
        updateHowItWorksSlider();
    }
});

function refreshHowItWorksSlider() {
    const maxSlide = getMaxHowItWorksSlide();

    if (howItWorksSlide > maxSlide) {
        howItWorksSlide = maxSlide;
    }

    createHowItWorksDots();
    updateHowItWorksSlider();
}

window.addEventListener("resize", refreshHowItWorksSlider);

refreshHowItWorksSlider();