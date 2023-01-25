const rangevalue = document.getElementById("r");

function displayRatingValue() {
    sessionStorage.setItem("rating", rangevalue.value);
}

rangevalue.addEventListener('change', displayRatingValue);