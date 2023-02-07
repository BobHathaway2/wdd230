const banner = document.getElementById("event-banner");
const thisDay = new Date().getDay();
if (thisDay >= 0 && thisDay <= 3) {
    banner.style.display = "block";
} else {
    banner.style.display = "none";
}
