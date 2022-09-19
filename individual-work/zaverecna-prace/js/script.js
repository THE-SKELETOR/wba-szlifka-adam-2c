window.onscroll = function() {scrollFunction()};
const topbar = document.getElementById("topbar")


function scrollFunction() {
    console.log(document.documentElement.scrollTop)
    if (document.documentElement.scrollTop > 60) {
        topbar.setAttribute("style","height:160px")
        document.getElementsByClassName('topbar-background').style.backgroundImage = "url(../images/groovin-small.gif)";
    }
    else { topbar.setAttribute("style"," ") }
}