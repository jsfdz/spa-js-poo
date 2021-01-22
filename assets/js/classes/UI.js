const
    root = document.getElementById('app')

export default class UI {
    static renderElement(element) {
        root.appendChild(element)
    }
}