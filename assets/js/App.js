import UI from './classes/UI.js'
import Router from './classes/Router.js';
import { Header } from './components/Header.js';
import { Home } from './views/Home.js';
import { Login } from './views/Login.js';
import { Register } from './views/Register.js';
import { Contact } from './views/Contact.js';
import { About } from './views/About.js';

const
    root = document.getElementById('app')

function App() {
    root.innerHTML = null

    UI.renderElement(Header())
    new Router('/', { auth: true }, [Home])
    new Router('/auth/login', {}, [Login])
    new Router('/singup/register', {}, [Register])
    new Router('/contact', {}, [Contact])
    new Router('/about', {}, [About])
}

export default App