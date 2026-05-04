const navbar = document.querySelector(".navbar");
const choose = document.querySelector(".current img");
const choose1 = document.querySelector(".choose1");
const choose2 = document.querySelector(".choose2");
const choose3 = document.querySelector(".choose3");
const current = [
    {
        src: "assets/object/def.png",
        height: "550px",
    },
    {
        src: "assets/object/home-img-2.png",
        height: "350px",
    },
    {
        src: "assets/object/home-img-3.png",
        height: "300px"
    },
];

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

choose1.addEventListener("click", function () {
    choose.src = current[0].src;
    choose.style.height = current[0].height;  // ← heigth 改 height
});

choose2.addEventListener("click", function () {
    choose.src = current[1].src;
    choose.style.height = current[1].height;  // ← heigth 改 height
});

choose3.addEventListener("click", function () {
    choose.src = current[2].src;
    choose.style.height = current[2].height;  // ← heigth 改 height
});
