const setting = document.querySelector("#setting");
const about = document.querySelector("#about");
const wallpaper = document.querySelector("#wallpaper");
const phone = document.querySelector(".phone");
const edit = document.querySelector("#status");

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
    setting.classList.add("animate__animated", "animate__slideInUp", "animate__faster");
});

document.querySelector("#about-right").addEventListener("click", function () {
    about.style.display = "flex";
    setting.classList.add("animate__animated", "animate__slideInUp", "animate__faster");
});

document.querySelector("#wallpapers").addEventListener("click", function () {
    wallpaper.style.display = "flex";
});

document.querySelector("#edit-pfp").addEventListener("click", function () {
    edit.style.display = "flex";
});

document.querySelectorAll(".wpp-card img").forEach(function (img) {
    img.addEventListener("click", function () {
        phone.style.backgroundImage = "url(" + img.src + ")";
        phone.style.backgroundSize = "cover";
        phone.style.backgroundPosition = "center";
        localStorage.setItem("wallpaper", img.src);
    });
});

document.querySelector("#back").addEventListener("click", function () {
    if (edit.style.display === "flex") {
        edit.style.display = "none";
    } else if (about.style.display === "flex") {
        about.style.display = "none";
    } else if (wallpaper.style.display === "flex") {
        wallpaper.style.display = "none";
    } else {
        setting.style.display = "none";
    }
});
