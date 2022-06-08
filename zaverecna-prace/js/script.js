// an abomination made with a sold soul
// topbar scroll shrink
window.onscroll = function() {scrollFunction()};
const topbar = document.getElementById("topbar")


function scrollFunction() {
    if (document.documentElement.scrollTop > 320 && document.documentElement.clientWidth > 1439) {
        topbar.setAttribute("style","height:160px")
        document.getElementById('topbar-background').style.backgroundImage = "url(../images/groovin-small.gif)";
    }
    else if (document.documentElement.scrollTop < 10 && document.documentElement.clientWidth > 1439) { topbar.setAttribute("style"," "); document.getElementById('topbar-background').style.backgroundImage = "url(../images/groovin.gif)"; }
    else {
        document.getElementById('topbar-background').style.backgroundImage = ""
    }
}

// skip stuff
function pageLoad() {
    window.location.href = "pages/about.html"
}

// nyeh
function nyeh() {
    new Audio("../images/nyeh.mp3").play()
}

// fark off
function farkOff() {
    new Audio("../images/fark-off.mp3").play()
}

// make img big on click
let previous
function imgBig(e) {
    if (e.classList.contains("image-overlay")) {
        e.classList.remove("image-overlay")
    }
    else {
        e.classList.add("image-overlay")
    }
    if (previous) {previous.classList.remove("image-overlay")}
    previous = e
}

// stuff quotes
let quotes = ["Where are they? Where are your friends now? Tell me about the loneliness of good, He-Man. Is it equal to the loneliness of evil?", "People of Eternia, the war is over. My forces are victorious. The Sorceress of Greyskull is my prisoner, and her powers are now joined with mine! Let this be my first decree... those who do not pledge themselves to me shall be destroyed! The new age begins!", "He-Man lives and possesses that key! I must possess all, or I possess nothing!", "Everything comes to he who waits... and I have waited so very long for this moment.", "People of Eternia! I stand before the Great Eye of the galaxy. Chosen by destiny to receive the powers of Greyskull! This inevitable moment will transpire before your eyes, even as He-Man himself bears witness to it. Now, I, Skeletor... am Master of the Universe! YES! Yes... I feel it, the power... fills me. Yes, I feel the universe within me! I am... I am a part of the cosmos! Its energy flows... flows through me! Of what consequence are you now? This planet, these people, they are nothing to me! The universe is power - pure, unstoppable power! And I am that force, I am that power! KNEEL BEFORE YOUR MASTER!", "Fool! You are no longer my equal! I am more than man! More than life! I... am... a... GOD! Now. You... will... KNEEL! KNEEL!", "Not the way to treat your beloved ruler! Throw down your weapons or you die!", "Stay where you are, He-Man! One more move and your friends will not live to see another day! I give you a choice. Return with me to Eternia as my slave and save their miserable lives, or perish with them on this primitive and tasteless planet. Surrender your sword.", "Witness this moment, He-Man! This moment where the powers of Greyskull will become mine for eternity! Our life-long battle in ending at last in the only way it could. When the Great Eye opens. The people of Eternia will see you kneel before me, just before you die!", "People of Eternia. I stand before the Great Eye of the galaxy. Chosen by destiny to receive the powers of Greyskull. This is inevitable moment will transpire me before you're eyes. Even as He-Man himself bares witness to it. Now. I... Skeletor. A master of the universe."]

function quoteGen() {
    const rand = Math.random() * (quotes.length-0) + 0
    console.log(rand)
    document.getElementById("quoteText").innerHTML = quotes[Math.floor(rand)]
}