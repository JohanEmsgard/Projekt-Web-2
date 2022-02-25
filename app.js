document.querySelector("#GB").addEventListener("change", changeGBPrice);

function changeGBPrice(event) {
    if (event.target.value === "128GB") {
        document.querySelector(".price-container").innerHTML = "6643:- SEK";
    }
    if (event.target.value === "256GB") {
        document.querySelector(".price-container").innerHTML = "7000:- SEK";
    }
}

document.querySelector("GB").addEventListener("change", changeGBPrice)

