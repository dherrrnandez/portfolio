import clock from "./clock.js"
const menu = document.getElementById("menu")
const hamMenu = document.getElementById("hamIcon")
const menuItem = document.querySelectorAll(".menu_item")
const workImg = document.querySelectorAll(".work_img")
const workAnchor = document.querySelectorAll(".work_a")
const workSection = document.querySelector(".work")

window.scrollTo(0, 0)

clock()
setInterval(clock, 30000)


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

workAnchor.forEach((item, i) => {
    item.addEventListener("click", () => {
        workSection.classList.add("active_project")

        workImg.forEach((item) => {
            item.classList.remove("active")
        })

        workAnchor.forEach(item => {
            item.classList.remove("isActive")
        })

        item.classList.add("isActive")
        workImg[i].classList.add("active")
    })
})

