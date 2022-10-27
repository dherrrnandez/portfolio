window.scrollTo(0, 0)

const clock = document.getElementById("clock")

const arTime = () => {
    const date = new Date()

    let time = date.toLocaleString("es-AR", {
        timeZone: "America/Argentina/Buenos_Aires",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    }) //time === "00:00 x. m."

    time = time.slice(0, 7) + time.slice(9, 10) // from "p. m." to "pm"
    time = time.toUpperCase()
    clock.innerText = `ARGENTINA ${time}`
}

arTime()
setInterval(arTime, 30000)

const hamMenu = document.getElementById("hamIcon")
const menu = document.getElementById("menu")

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

const menuItem = document.querySelectorAll(".menu_item")

menuItem.forEach(item => {
    item.addEventListener("click", () => {
        menuIsActive = false
        menu.classList.remove("active")
    })
})

const workImg = document.querySelectorAll(".work_img")
const workAnchor = document.querySelectorAll(".work_a")

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

