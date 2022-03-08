document.querySelector("#GB").addEventListener("change", changeGBPrice);

function changeGBPrice(event) {
    if (event.target.value === "128GB") {
        document.querySelector(".price-container").innerHTML = "6643:- SEK";
    }
    if (event.target.value === "256GB") {
        document.querySelector(".price-container").innerHTML = "7000:- SEK";
    }
}

let gb2Element = document.querySelector("#GB2");
if (gb2Element != null) {
    gb2Element.addEventListener("change", changeGB2Price);
}

