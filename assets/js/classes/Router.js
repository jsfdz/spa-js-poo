import UI from "./UI.js"

export default class Router {
    constructor(url, auth, template) {
        this.url = url
        this.auth = auth
        this.template = template
        this.useRouter()
    }

    useRouter() {
        const
            hash = location.hash

        if (!hash && this.url === '/') {
            history.replaceState({}, null, '/')
            this.template.forEach(component => {
                UI.renderElement(component())
            })
        } else if (hash.substr(1) === this.url) {
            history.replaceState({}, null, hash.substr(1))
            this.template.forEach(component => {
                UI.renderElement(component())
            })
        }
    }
}