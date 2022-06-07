let shopItems = {}
class shopItem {
    constructor(element, name, price, costTxt, clickMod, amountTxt) {
        this.amountTxt = amountTxt
        this.clickMod = clickMod
        this.name = name
        this.amount = 0
        this.price = price
        this.initPrice = price
        this.element = element
        this.costTxt = costTxt
        shopItems[this.name] = this
        this.addListener()
    }
    addListener() {
        document.getElementById(this.element).addEventListener("click",function() {
            if (click >= this.price) {
                click -= this.price
                this.amount++
                document.getElementById(this.amountTxt).innerHTML = `you have ${this.amount}`
                this.price = (this.initPrice * Math.pow(1.15, this.amount)).toFixed(0)
                document.getElementById(this.costTxt).innerHTML = `costs ${this.price} clicks`
            }
        }.bind(this))
    }
}

new shopItem("shop1","Grandma",15,"cost1",0.2,"amount1")
new shopItem("shop2","Office Worker",120,"cost2",1,"amount2")
new shopItem("shop3","Secretary",800,"cost3",5,"amount3")
new shopItem("shop4","IT Support",4000,"cost4",20,"amount4")
new shopItem("shop5","Gamer",24000,"cost5",100,"amount5")
new shopItem("shop6","Hacker",65000,"cost6",250,"amount6")
new shopItem("shop7","Autoclicker",174000,"cost7",620,"amount7")
new shopItem("shop8","Russian Bots",450000,"cost8",1500,"amount8")

let click = 0
let clickPower = 1


function Click() {
    click += clickPower
    document.getElementById("clickCounter").innerHTML = click.toFixed(1) + " clicks"
}

function cPerSecond() {
    let clickPS = Number(Object.keys(shopItems).map(x => shopItems[x].amount * shopItems[x].clickMod).reduce((prev, curr) => prev + curr, 0)).toFixed(1)
    click += clickPS/2
    console.log(clickPS)
    document.getElementById("clickCounter").innerHTML = click.toFixed(1) + " clicks"
    document.getElementById("clickPSCounter").innerHTML = clickPS + " clicks per second"
    clickPower = 1 + clickPS/5
    document.getElementById("clickPOWCounter").innerHTML = clickPower.toFixed(2) + " click power"
}
let cpsHandler = setInterval(cPerSecond, 500)

function saveStuff() {
    window.localStorage.setItem("boughtStuff", JSON.stringify(shopItems))
    window.localStorage.setItem("moolah", click.toFixed(1))
}

function loadStuff() {
    clearInterval(cpsHandler)
    delete shopItems
    shopItems = JSON.parse(window.localStorage.getItem("boughtStuff"))
    console.log(shopItems)
    click = Number(window.localStorage.getItem("moolah"))
    Object.keys(shopItems).forEach(x => {
        shopItems[x] = Object.setPrototypeOf(shopItems[x], shopItem.prototype)
        document.getElementById(shopItems[x].amountTxt).innerHTML = `you have ${shopItems[x].amount}`
        let something = document.getElementById(shopItems[x].element)
        something.replaceWith(something.cloneNode(true))
        shopItems[x].addListener()
    })
    cPerSecond()
    cpsHandler = setInterval(cPerSecond, 500)
}
// to do - yay