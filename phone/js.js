const setting = document.querySelector("#setting");
const about = document.querySelector("#about");
const wallpaper = document.querySelector("#wallpaper");
const phone = document.querySelector(".phone");
const edit = document.querySelector("#status");
const donate = document.querySelector("#donate");
const news = document.querySelector("#news");
const sport = document.querySelector("#sports");
const car = document.querySelector("#cars");
const business = document.querySelector("#business");
const entertainment = document.querySelector("#entertainment");
const author = document.querySelector("#author");
const readsport = document.querySelector("#read-sp");
const readsport2 = document.querySelector("#read-sp2");
const readsport3 = document.querySelector("#read-sp3");
const readcar = document.querySelector("#read-cr");
const readcar2 = document.querySelector("#read-cr2");
const readcar3 = document.querySelector("#read-cr3");
const readbs = document.querySelector("#read-bs");
const readbs2 = document.querySelector("#read-bs2");
const readbs3 = document.querySelector("#read-bs3");
const readent = document.querySelector("#read-ent");
const readent2 = document.querySelector("#read-ent2");
const readent3 = document.querySelector("#read-ent3");
const paypal = document.querySelector("#paypal");
const balance = document.querySelector(".balance");
const transfer = document.querySelector("#transfer");
const history = document.querySelector("#history");

const savedWallpaper = localStorage.getItem("wallpaper") || "assets/bg/beach.jpg";
if (savedWallpaper) {
    phone.style.backgroundImage = "url(" + savedWallpaper + ")";
    phone.style.backgroundSize = "cover";
    phone.style.backgroundPosition = "center";
}

document.querySelector("#wpp-btn").addEventListener("click", function () {
    const url = document.querySelector("#wpp-input").value;
    if (url) {
        phone.style.backgroundImage = "url(" + url + ")";
        phone.style.backgroundSize = "cover";
        phone.style.backgroundPosition = "center";
        localStorage.setItem("wallpaper", url);
    }
});

const savedName = localStorage.getItem("username") || "User";
const savedPfp = localStorage.getItem("pfp");

document.querySelector("#username").textContent = savedName;
document.querySelector("#username-preview").textContent = savedName;
if (savedPfp) {
    document.querySelector("#pfp").src = savedPfp;
    document.querySelector("#pfp-preview").src = savedPfp;
}

document.querySelector("#save-btn").addEventListener("click", function () {
    const newName = document.querySelector("#name-input").value.trim();
    if (newName !== "") {
        document.querySelector("#username").textContent = newName;
        document.querySelector("#username-preview").textContent = newName;
        localStorage.setItem("username", newName);
    }
});

document.querySelector("#pfp-upload").addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.querySelector("#pfp").src = e.target.result;
            document.querySelector("#pfp-preview").src = e.target.result;
            localStorage.setItem("pfp", e.target.result);
        };
        reader.readAsDataURL(file);
    }
});

document.querySelector("#wpp-reset").addEventListener("click", function () {
    localStorage.removeItem("wallpaper");
    phone.style.backgroundImage = "none";
    phone.style.backgroundColor = "#222";
});

document.querySelector("#app-setting").addEventListener("click", function () {
    setting.style.display = "flex";
    setting.classList.add("animate__animated", "animate__slideInUp", "animate__fast");
});

document.querySelector("#about-right").addEventListener("click", function () {
    about.style.display = "flex";
    about.classList.add("animate__animated", "animate__slideInDown", "animate__fast");
});

document.querySelector("#wallpapers").addEventListener("click", function () {
    wallpaper.style.display = "flex";
    wallpaper.classList.add("animate__animated", "animate__slideInDown", "animate__fast");
});

document.querySelector("#edit-pfp").addEventListener("click", function () {
    edit.style.display = "flex";
});

document.querySelector("#donate-app").addEventListener("click", function () {
    donate.style.display = "flex";
    donate.classList.add("animate__animated", "animate__slideInUp", "animate__fast");
});

document.querySelector("#news-app").addEventListener("click", function () {
    news.style.display = "flex";
    news.classList.add("animate__animated", "animate__slideInUp", "animate__fast");
});

document.querySelector("#paypal-app").addEventListener("click", function () {
    paypal.style.display = "flex";
    paypal.classList.add("animate__animated", "animate__slideInUp", "animate__fast");
});

document.querySelector("#sport-page").addEventListener("click", function () {
    sport.style.display = "flex";
    sport.classList.add("animate__animated", "animate__slideInUp", "animate__fast");
});

document.querySelector("#car-page").addEventListener("click", function () {
    car.style.display = "flex";
    car.classList.add("animate__animated", "animate__slideInUp", "animate__fast");
});

document.querySelector("#business-page").addEventListener("click", function () {
    business.style.display = "flex";
    business.classList.add("animate__animated", "animate__slideInUp", "animate__fast");
});

document.querySelector("#enter-page").addEventListener("click", function () {
    entertainment.style.display = "flex";
    entertainment.classList.add("animate__animated", "animate__slideInUp", "animate__fast");
});

document.querySelector("#about-aut").addEventListener("click", function () {
    author.style.display = "flex";
    author.classList.add("animate__animated", "animate__slideInUp", "animate__fast");
});

document.querySelector("#read-1").addEventListener("click", function () {
    readsport.style.display = "flex";
    readsport.classList.add("animate__animated", "animate__slideInUp", "animate__fast");
});

document.querySelector("#read-2").addEventListener("click", function () {
    readsport2.style.display = "flex";
    readsport2.classList.add("animate__animated", "animate__slideInUp", "animate__fast");
});

document.querySelector("#read-3").addEventListener("click", function () {
    readsport3.style.display = "flex";
    readsport3.classList.add("animate__animated", "animate__slideInUp", "animate__fast");
});

document.querySelector("#cr-1").addEventListener("click", function () {
    readcar.style.display = "flex";
    readcar.classList.add("animate__animated", "animate__slideInUp", "animate__fast");
});

document.querySelector("#cr-2").addEventListener("click", function () {
    readcar2.style.display = "flex";
    readcar2.classList.add("animate__animated", "animate__slideInUp", "animate__fast");
});

document.querySelector("#cr-3").addEventListener("click", function () {
    readcar3.style.display = "flex";
    readcar3.classList.add("animate__animated", "animate__slideInUp", "animate__fast");
});

document.querySelector("#bs-1").addEventListener("click", function () {
    readbs.style.display = "flex";
    readbs.classList.add("animate__animated", "animate__slideInUp", "animate__fast");
});

document.querySelector("#bs-2").addEventListener("click", function () {
    readbs2.style.display = "flex";
    readbs2.classList.add("animate__animated", "animate__slideInUp", "animate__fast");
});

document.querySelector("#bs-3").addEventListener("click", function () {
    readbs3.style.display = "flex";
    readbs3.classList.add("animate__animated", "animate__slideInUp", "animate__fast");
});

document.querySelector("#ent-1").addEventListener("click", function () {
    readent.style.display = "flex";
    readent.classList.add("animate__animated", "animate__slideInUp", "animate__fast");
});

document.querySelector("#ent-2").addEventListener("click", function () {
    readent2.style.display = "flex";
    readent2.classList.add("animate__animated", "animate__slideInUp", "animate__fast");
});

document.querySelector("#ent-3").addEventListener("click", function () {
    readent3.style.display = "flex";
    readent3.classList.add("animate__animated", "animate__slideInUp", "animate__fast");
});

document.querySelector("#send").addEventListener("click", function () {
    transfer.style.display = "flex";
    transfer.classList.add("animate__animated", "animate__slideInUp", "animate__fast");
});

document.querySelector("#his").addEventListener("click", function () {
    history.style.display = "flex";
    history.classList.add("animate__animated", "animate__slideInUp", "animate__fast");
});

document.querySelector("#transfer-back").addEventListener("click", function () {
    if (transfer.style.display === "flex") {
        transfer.style.display = "none";
        paypal.style.display = "flex";
    }
});

document.querySelector("#history-back").addEventListener("click", function () {
    if (history.style.display === "flex") {
        history.style.display = "none";
        paypal.style.display = "flex";
    }
});

document.querySelectorAll(".wpp-card img").forEach(function (img) {
    img.addEventListener("click", function () {
        phone.style.backgroundImage = "url(" + img.src + ")";
        phone.style.backgroundSize = "cover";
        phone.style.backgroundPosition = "center";
        localStorage.setItem("wallpaper", img.src);
    });
});

// paypal balance
const random_balance = (Math.random() * 180 + 20).toFixed(2);
document.querySelectorAll(".balance").forEach(function (el) {
    el.textContent = random_balance + " PMC";
});

// back
document.querySelector("#back").addEventListener("click", function () {
    if (edit.style.display === "flex") {
        edit.style.display = "none";
    } else if (author.style.display === "flex") {
        author.style.display = "none";
        about.style.display = "flex";
    } else if (about.style.display === "flex") {
        about.style.display = "none";
    } else if (wallpaper.style.display === "flex") {
        wallpaper.style.display = "none";
    } else {
        setting.style.display = "none";
    }
});

document.querySelector("#back-2").addEventListener("click", function () {
    if (donate.style.display === "flex") {
        donate.style.display = "none";
    } else {
        donate.style.display = "none";
    }
});

document.querySelector("#back-3").addEventListener("click", function () {
    if (readent3.style.display === "flex") {
        readent3.style.display = "none";
        business.style.display = "flex";
    } else if (readent2.style.display === "flex") {
        readent2.style.display = "none";
        business.style.display = "flex";
    } else if (readent.style.display === "flex") {
        readent.style.display = "none";
        business.style.display = "flex";
    } else if (readbs3.style.display === "flex") {
        readbs3.style.display = "none";
        business.style.display = "flex";
    } else if (readbs2.style.display === "flex") {
        readbs2.style.display = "none";
        business.style.display = "flex";
    } else if (readbs.style.display === "flex") {
        readbs.style.display = "none";
        business.style.display = "flex";
    } else if (readcar3.style.display === "flex") {
        readcar3.style.display = "none";
        car.style.display = "flex";
    } else if (readcar2.style.display === "flex") {
        readcar2.style.display = "none";
        car.style.display = "flex";
    } else if (readcar.style.display === "flex") {
        readcar.style.display = "none";
        car.style.display = "flex";
    } else if (readsport3.style.display === "flex") {
        readsport3.style.display = "none";
        sport.style.display = "flex";
    } else if (readsport2.style.display === "flex") {
        readsport2.style.display = "none";
        sport.style.display = "flex";
    } else if (readsport.style.display === "flex") {
        readsport.style.display = "none";
        sport.style.display = "flex";
    } else if (car.style.display === "flex") {
        car.style.display = "none";
        news.style.display = "flex";
    } else if (sport.style.display === "flex") {
        sport.style.display = "none";
        news.style.display = "flex";
    } else if (business.style.display === "flex") {
        business.style.display = "none";
        news.style.display = "flex";
    } else if (entertainment.style.display === "flex") {
        entertainment.style.display = "none";
        news.style.display = "flex";
    } else if (news.style.display === "flex") {
        news.style.display = "none";
    }
});

document.querySelector("#back-4").addEventListener("click", function () {
    if (paypal.style.display === "flex") {
        paypal.style.display = "none";
    } else {
        paypal.style.display = "none";
    }
});
