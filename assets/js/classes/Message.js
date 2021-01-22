export default class Message {
    constructor(className = 'info', message = '') {
        this.className = className
        this.message = message
        this.showMessage()
    }

    static showMessage() {
        const
            div = document.createElement('div')

        div.classList.add('alert', this.className)
        div.innerHTML = this.message
        const
            app = document.getElementById('app')

        app.insertAdjacentElement('afterbegin', div)
    }
}