export function About() {
    const
        container = document.createElement('div')

    container.classList.add('container')
    container.innerHTML = `<h1>About Page</h1>`
    return container
}