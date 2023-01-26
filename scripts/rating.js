const rangevalue = document.getElementById("r");
const ratingValue = document.getElementById("ratingValue");

function displayRatingValue() {
    ratingValue.innerText = r.value;
}
ratingValue.innerText = "5";
rangevalue.addEventListener('change', displayRatingValue);