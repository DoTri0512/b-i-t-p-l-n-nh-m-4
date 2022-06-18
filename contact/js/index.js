function openFunction() {
    var x = document.getElementById("header__mobile-menu")
    var y = document.getElementById("header__menu-overlay")
    if (y.style.display === "block" && x.style.display === "block") {
        y.style.display = "none";
        x.style.display = "none";
    } else {
        y.style.display = "block";
        x.style.display = "block";
    }
}