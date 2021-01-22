import Request from '../classes/Request.js'
import Api from '../helpers/Api.js'

export function Home() {
    const
        container = document.createElement('div')

    container.classList.add('container', 'mt-5')
    container.innerHTML = `
    <div class="row justify-content-center">
    <div class="col-md-6">
        <div class="card card-matter">
            <div class="card-body">
                <form action="/" id="invitation-form">
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter email" required>
                      </div>
                      <button type="submit" class="btn alert-info rounded-pill btn-block">Submit</button>
                </form>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="card card-matter mt-sm-5">
            <div class="card-body">
                <ul class="list-unstyled m-0">
                    <li>
                        <a href="/profile.html">Perfil</a>
                    </li>
                    <li>
                        <a href="/evaluate-skills.html">Evaluar skills</a>
                    </li>
                    <li>
                        <a href="/feedback.html">Feedback recibido</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
`
    return container
}