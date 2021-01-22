import App from './App.js'

document.querySelectorAll('a[href="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault()
    })
})

document.addEventListener('DOMContentLoaded', App)
window.addEventListener('hashchange', App)
