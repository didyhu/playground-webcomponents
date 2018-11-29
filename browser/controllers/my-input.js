export default class MyInput extends HTMLElement {
    constructor() {
        super()
        const templateName = this.getAttribute("template")
        this.template = document.querySelector(`template[name=${templateName}]`)
        this.appendChild(document.importNode(this.template.content, true))
        this.labelElem = this.querySelector("[data-role=label]")
        this.inputElem = this.querySelector("[data-role=input]")
        this.inputElem.setAttribute("type", this.getAttribute("type"))

        this.labelElem.innerHTML = this.label
    }
    get type() {
        return this.getAttribute("type")
    }
    get name() {
        return this.getAttribute("name")
    }
    get label() {
        return this.getAttribute("label")
    }
    get value() {
        return this.inputElem.value
    }
    set value(value) {
        this.inputElem.value = value
    }
}