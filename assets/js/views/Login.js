export function Login() {
    const
        container = document.createElement('div')

    container.classList.add('container', 'mt-5')
    container.innerHTML = `
        <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6">
                <div class="alert alert-warning">
                    <div class="alert-body">
                        <h6>Test data</h6>
                        <p class="m-0">
                            <b>user:</b> erik6@academlo.com <br>
                            <b>password:</b> secret
                        </p>
                    </div>
                </div>
                <div class="text-center">
                    <img src="https://placeimg.com/150/150/people" alt="" width="150px" class="mb-3">
                </div>
                <div class="card card-matter">
                    <div class="card-body">
                        <form action="/login" id="login-form">
                            <div class="form-group">
                              <label for="email">Email</label>
                              <input type="email" class="form-control" id="email" placeholder="Enter email" required="">
                            </div>
                            <div class="form-group">
                              <label for="password">Password</label>
                              <input type="password" class="form-control" id="password" placeholder="Password" required="">
                            </div>
                            <div class="text-center mb-3">
                                <a href="#/singup/register" class="text-decoration-none">Create an account</a>
                            </div>
                            <button id="login-button" type="submit" class="btn btn-block rounded-pill alert-info">Iniciar sesión</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `
    return container
}