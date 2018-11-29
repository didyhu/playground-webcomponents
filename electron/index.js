customElements.define("my-button", require("./controllers/my-button"))
customElements.define("my-form", require("./controllers/my-form"))
customElements.define("my-input", require("./controllers/my-input"))
customElements.define("my-users", require("./components/my-users"))
customElements.define("my-clock", require("./components/my-clock"))
customElements.define("main-container", class extends HTMLElement {
    constructor() {
        super()
        this.state = {
            users: [
                { username: "foo", password: "foo", age: 18 },
                { username: "bar", password: "bar", age: 19 },
            ]
        }
        document.querySelector("#my-users0").update(this.state.users)
        document.querySelector("#register-form").addEventListener("my-form-submit", this.onSubmitNewUser.bind(this))
    }
    onSubmitNewUser(event) {
        const formData = event.detail
        const user = { username: formData.get("username"), password: formData.get("password"), age: formData.get("age") }
        this.state.users.push(user)
        document.querySelector("#my-users0").update(this.state.users)
        this.dispatchEvent(new CustomEvent("my-submit-new-user", { bubbles: true, detail: user }))
    }
})



