module.exports = class MyButton extends HTMLElement {
    constructor() {
        super()
        const text = this.textContent
        this.innerHTML = null
        const templateName = this.getAttribute("template")
        this.template = document.querySelector(`template[name=${templateName}]`)
        this.appendChild(document.importNode(this.template.content, true))
        this.buttonElem = this.querySelector("[data-role=button]")
        this.buttonElem.innerHTML = text
        this.messageElem = this.querySelector("[data-role=message]")
        this.buttonElem.addEventListener("click", this.onClick.bind(this))
    }
    update({ message }) {
        if (message) {
            const { text, type } = message
            this.messageElem.innerHTML = text
            switch (type) {
                case "error":
                case "ok":
                    this.messageElem.setAttribute("type", type)
            }
        }
    }
    onClick(event) {
        let eventName
        switch (this.getAttribute("type")) {
            case "submit":
                eventName = "my-submit-button-click";
                break
            default:
                eventName = "my-button-click"
        }
        this.dispatchEvent(new CustomEvent(eventName, { bubbles: true }))
    }
}