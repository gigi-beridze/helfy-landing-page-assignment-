const SPEED = 40;

const ITEMS = [
    {
        icon: "../assets/icons/pill.svg",
        text: "Discreet & qualified treatments"
    },
    {
        icon: "../assets/icons/person.svg",
        text: "Online consultation & prescription"
    },
    {
        icon: "../assets/icons/box.svg",
        text: "Shipping 1–2 days"
    },
    {
        icon: "../assets/icons/check.svg",
        text: "Secure information"
    },
    {
        icon: "../assets/icons/badge-euro.svg",
        text: "Affordable pricing with no hidden fees"
    },
    {
        icon: "../assets/icons/users.svg",
        text: "600K+ Customers"
    },
    {
        icon: "../assets/icons/book-check.svg",
        text: "40+ Categories"
    },
    {
        icon: "../assets/icons/star.svg",
        text: "3M+ Orders"
    },
    {
        icon: "../assets/icons/award.svg",
        text: "7+ Years of trust"
    },
];

const track = document.getElementById("topbarTrack");
const marquee = document.getElementById("topbarMarquee");

function buildGroup(hidden = false) {
    const group = document.createElement("div");

    group.className = "topbar__group";

    if (hidden) {
        group.setAttribute("aria-hidden", "true");
    }

    group.innerHTML = ITEMS.map(({ icon, text }) => `
        <span class="topbar__item">
            <img src="${icon}" alt="" class="topbar__icon">
            <span>${text}</span>
        </span>
    `).join("");

    return group;
}

function setDuration() {
    const distance = track.scrollWidth / 2;

    if (distance) {
        const duration = distance / SPEED;

        track.style.setProperty(
            "--topbar-duration",
            `${duration.toFixed(2)}s`
        );
    }
}

function setPlayState(state) {
    track.style.animationPlayState = state;
}

function init() {
    if (!track) return;

    track.append(
        buildGroup(false),
        buildGroup(true)
    );

    setDuration();

    window.addEventListener("resize", setDuration);

    if (document.fonts) {
        document.fonts.ready.then(setDuration);
    }

    document.addEventListener("visibilitychange", () => {
        setPlayState(
            document.hidden ? "paused" : "running"
        );
    });

    marquee?.addEventListener("focusin", () => {
        setPlayState("paused");
    });

    marquee?.addEventListener("focusout", () => {
        setPlayState("running");
    });
}

init();