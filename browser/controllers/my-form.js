export default class MyForm extends HTMLElement {
    constructor() {
        super()
        this.addEventListener("my-submit-button-click", this.onSubmit.bind(this))
    }
    onSubmit(event) {
        const formData = new Map()
        for (const input of this.querySelectorAll("my-input")) {
            formData.set(input.name, input.value)
        }
        if (!formData.get("username") || !formData.get("password")) {
            console.warn("Invalid values.")
            event.target.update({ message: { type: "error", text: "Invalid values." } })
            return false;
        }
        event.target.update({ message: { type: "ok" } })
        this.dispatchEvent(new CustomEvent("my-form-submit", { bubbles: true, detail: formData }))
    }
}