const reviewList = document.getElementById("reviewList");
const reviewPrev = document.getElementById("reviewPrev");
const reviewNext = document.getElementById("reviewNext");
const reviewDots = document.getElementById("reviewDots");

let currentSlide = 0;

function getVisibleCards() {
    if (window.innerWidth <= 768) {
        return 1;
    }

    if (window.innerWidth <= 1200) {
        return 2;
    }

    return 4;
}

function getMaxSlide() {
    return Math.max(
        0,
        reviewList.children.length - getVisibleCards()
    );
}

function createDots() {
    const totalSlides = getMaxSlide() + 1;

    reviewDots.innerHTML = "";

    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement("button");

        dot.className = "review__dot";
        dot.setAttribute("aria-label", `Go to slide ${i + 1}`);

        dot.addEventListener("click", () => {
            currentSlide = i;
            updateSlider();
        });

        reviewDots.appendChild(dot);
    }
}

function updateSlider() {
    const card = reviewList.children[0];

    if (!card) {
        return;
    }

    const cardWidth = card.offsetWidth;
    const gap = 24;
    const offset = currentSlide * (cardWidth + gap);

    reviewList.style.transform = `translateX(-${offset}px)`;

    reviewPrev.disabled = currentSlide === 0;
    reviewNext.disabled = currentSlide === getMaxSlide();

    [...reviewDots.children].forEach((dot, index) => {
        dot.classList.toggle("active", index === currentSlide);
    });
}

reviewNext.addEventListener("click", () => {
    if (currentSlide < getMaxSlide()) {
        currentSlide++;
        updateSlider();
    }
});

reviewPrev.addEventListener("click", () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlider();
    }
});

function refreshSlider() {
    const maxSlide = getMaxSlide();

    if (currentSlide > maxSlide) {
        currentSlide = maxSlide;
    }

    createDots();
    updateSlider();
}

window.addEventListener("resize", refreshSlider);

refreshSlider();