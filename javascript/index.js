let number = 0
function clickMe() {
    number = number+1
    if (number < 100) {
        document.getElementById('text').innerText = (number + " lmao")
    }
    else if (300 > number && number >= 100) {
        document.getElementById('text').innerText = (number + " pog")
    }
    else {
        document.getElementById('text').innerText = (number + " actively pogging")
    }
}

function ninjaButton() {
     let element = document.getElementById("ninja")
     element.classList.toggle("hide")
}