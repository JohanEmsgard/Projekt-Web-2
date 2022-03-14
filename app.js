document.querySelector("#GB").addEventListener("change", changeGBPrice);

function changeGBPrice(event) {
    if (event.target.value === "128GB") {
        document.querySelector(".price-container").innerHTML = "6643:- SEK";
    }
    if (event.target.value === "256GB") {
        document.querySelector(".price-container").innerHTML = "7000:- SEK";
    }

}


function changephonecolor(event) {
    if (event.target.value === "Svart") {
        document.querySelector(".phonecolor").setAttribute("src", "./Blacksamsungs21.webp");
    }
}

let gb2Element = document.querySelector("#GB2");
if (gb2Element != null) {
    gb2Element.addEventListener("change", changeGBPrice);
    if (target.value ==="256"){
        document.querySelector(".price-container2").innerHTML = "8000:- SEK";
    }
}





