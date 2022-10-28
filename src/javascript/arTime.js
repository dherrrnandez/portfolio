
const arTime = () => {
    const clock = document.getElementById("clock")
    const date = new Date()

    let time = date.toLocaleString("en-US", {
        timeZone: "America/Argentina/Buenos_Aires",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    })
    time = time.toUpperCase()
    clock.innerText = `ARGENTINA ${time}`
}

export default arTime