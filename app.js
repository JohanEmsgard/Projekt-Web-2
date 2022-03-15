document.querySelector("#GB").addEventListener("change", changeGBPrice);
document.querySelector("#color").addEventListener("change", changecolor2);

function changeGBPrice(event) {
    if (event.target.value === "128GB") {
        document.querySelector(".price-container").innerHTML = "6643:- SEK";
    }
    if (event.target.value === "256GB") {
        document.querySelector(".price-container").innerHTML = "7000:- SEK";
    }

}


function changecolor2(event) {
    if (event.target.value === "Svart") {
        let changecolor = document.querySelector(".color2");
        changecolor.setAttribute("src", "./Blacksamsungs21.webp");
    }
    if (event.target.value ==="Vit") {
        let changecolor = document.querySelector(".color2")
        changecolor.setAttribute("src", "./whitesamsungs21.png")
    }

    if (event.target.value ==="Lilla") {
        let changecolor = document.querySelector(".color2")
        changecolor.setAttribute("src", "./samsung.webp")
    }
    if (event.target.value ==="Rosa") {
        let changecolor = document.querySelector(".color2")
        changecolor.setAttribute("src", "./pinksamsungs21.webp")
    }

        if (event.target.value ==="Röd") {
            let changecolor = document.querySelector(".color2")
            changecolor.setAttribute("src", "./redsamsungs20.webp")
        }
    }


let gb2Element = document.querySelector("#GB2");
if (gb2Element != null) {
    gb2Element.addEventListener("change", changeGBPrice);
    if (target.value ==="256"){
        document.querySelector(".price-container2").innerHTML = "8000:- SEK";
    }
}





