import arTime from "./arTime.js"
const menu = document.getElementById("menu")
const hamMenu = document.getElementById("hamIcon")
const menuItem = document.querySelectorAll(".menu_item")
const workImg = document.querySelectorAll(".work_img")
const workAnchor = document.querySelectorAll(".work_a")

window.scrollTo(0, 0)

arTime()
setInterval(arTime, 30000)


let menuIsActive = false

hamMenu.addEventListener("click", () => {
    if (menuIsActive) {
        menuIsActive = false
        menu.classList.remove("active")
        document.body.classList.remove("ham_active")
    } else {
        menuIsActive = true
        menu.classList.add("active")
        document.body.classList.add("ham_active")
    }
})

menuItem.forEach(item => {
    item.addEventListener("click", () => {
        menuIsActive = false
        menu.classList.remove("active")
    })
})

workAnchor.forEach(item => {
    item.addEventListener("click", () => {
        workImg.forEach(item => {
            item.classList.remove("active")
        })

        workAnchor.forEach(item => {
            item.classList.remove("isActive")
        })

        if (item.classList.contains("first")) {
            item.classList.add("isActive");
            workImg[0].classList.add("active")
        } else if (item.classList.contains("second")) {
            item.classList.add("isActive");
            workImg[1].classList.add("active")
        } else if (item.classList.contains("third")) {
            item.classList.add("isActive");
            workImg[2].classList.add("active")
        } else {
            item.classList.add("isActive");
            workImg[3].classList.add("active")
        }

    })
})

