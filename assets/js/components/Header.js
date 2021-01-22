import { Menu } from "./Menu.js"

export function Header() {
    const
        header = document.createElement('header')
    header.classList.add('header', 'bg-light')
    const container = document.createElement('div')
    container.classList.add('container', 'p-5')
    header.appendChild(container)
    container.appendChild(Menu())

    return header
}