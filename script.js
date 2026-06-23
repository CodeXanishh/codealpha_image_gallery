const images = document.querySelectorAll(".gallery img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let current = 0;

images.forEach((img, index) => {
    img.addEventListener("click", () => {
        current = index;
        showImage();
        lightbox.style.display = "flex";
    });
});

function showImage() {
    lightboxImg.src = images[current].src;
}

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

nextBtn.addEventListener("click", () => {
    current = (current + 1) % images.length;
    showImage();
});

prevBtn.addEventListener("click", () => {
    current = (current - 1 + images.length) % images.length;
    showImage();
});
function filterSelection(category) {
    images.forEach(img => {
        if (category === "all") {
            img.style.display = "block";
        }
        else if (img.classList.contains(category)) {
            img.style.display = "block";
        }
        else {
            img.style.display = "none";
        }
    });
}
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        nextBtn.click();
    }

    if (e.key === "ArrowLeft") {
        prevBtn.click();
    }

    if (e.key === "Escape") {
        lightbox.style.display = "none";
    }
});
document.querySelector(".back-btn").onclick = () => {
    lightbox.style.display = "none";
};
const counter = document.querySelector(".counter");

function showImage() {
    lightboxImg.src = images[current].src;
    counter.innerText =
        `${current + 1} / ${images.length}`;
}
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        toggleBtn.innerHTML = "🌙 Dark Mode";
    } else {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        toggleBtn.innerHTML = "☀️ Light Mode";
    }
});