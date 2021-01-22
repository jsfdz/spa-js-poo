export function Menu() {
    const
        nav = document.createElement('nav')
    nav.classList.add('d-flex', 'justify-content-between')

    nav.innerHTML = `<a href="#/">Home</a> 
                        <em>•</em> 
                    <a href="#/auth/login">Login</a>
                        <em>•</em>
                    <a href="#/singup/register">Register</a>
                        <em>•</em> 
                    <a href="#/contact">Contact</a>
                        <em>•</em> 
                    <a href="#/about">About</a>
                        <em>•</em>`
    return nav
}