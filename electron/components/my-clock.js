module.exports = class MyClock extends HTMLElement {
    constructor() {
        super()
        const templateUrl = this.getAttribute("template-url")
        fetch(templateUrl).then(res => res.text()).then(text => {
            const template = document.createElement("template")
            template.innerHTML = text
            return template
        }).then(template => {
            this.appendChild(document.importNode(template.content, true))
            this.hours = document.querySelector("[data-name=hours]")
            this.minutes = document.querySelector("[data-name=minutes]")
            this.seconds = document.querySelector("[data-name=seconds]")
            this.run()
        })
    }
    run() {
        if (this.getAttribute("autorun") == "true") {
            const date = new Date()
            this.hours.innerHTML = date.getHours()
            this.minutes.innerHTML = date.getMinutes()
            this.seconds.innerHTML = date.getSeconds()
        }
        requestAnimationFrame(() => this.run())
    }
}