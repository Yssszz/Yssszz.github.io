const setting = document.querySelector("#setting");

document.querySelector("#app-setting").addEventListener("click", function () {
    setting.style.display = "flex";
    setting.classList.add("animate__animated", "animate__slideInUp", "animate_fasterx'z");
});

document.querySelector("#back").addEventListener("click", function () {
    document.querySelector("#setting").style.display = "none";
});
