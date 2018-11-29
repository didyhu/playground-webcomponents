import MyUsers from "./components/my-users.js"
customElements.define("my-users", MyUsers)
import MyButton from "./controllers/my-button.js"
customElements.define("my-button", MyButton)
import MyForm from "./controllers/my-form.js"
customElements.define("my-form", MyForm)
import MyInput from "./controllers/my-input.js"
customElements.define("my-input", MyInput)

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
        document.addEventListener("my-form-submit", this.onSubmitNewUser.bind(this))
    }
    onSubmitNewUser(event) {
        const formData = event.detail
        const user = { username: formData.get("username"), password: formData.get("password"), age: formData.get("age") }
        this.state.users.push(user)
        document.querySelector("#my-users0").update(this.state.users)
        this.dispatchEvent(new CustomEvent("my-submit-new-user", { bubbles: true, detail: user }))
    }
})



