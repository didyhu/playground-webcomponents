export default class MyUsers extends HTMLElement {
    constructor() {
        super()
        this.rowTemplate = this.querySelector("template[name=row]")
        this.body = document.querySelector("tbody")
    }
    update(users) {
        while (this.body.childNodes.length) this.body.removeChild(this.body.firstChild)
        for (const user of users) {
            const myUsersItem = document.importNode(this.rowTemplate.content, true)
            for (const cell of myUsersItem.querySelectorAll("[data-name]")) {
                const name = cell.dataset.name
                if (user[name]) {
                    cell.innerHTML = user[name]
                }
            }
            this.body.appendChild(myUsersItem)
        }
    }
}