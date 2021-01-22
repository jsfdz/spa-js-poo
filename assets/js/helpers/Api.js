//https://matter-app.herokuapp.com/api/v1

const
    NAME = 'matter-app',
    DOMAIN = `https://${NAME}.herokuapp.com`,
    API = `${DOMAIN}api/v1`,
    LOGIN = `${API}/auth/login`,
    REGISTER = `${API}/users`

export default {
    NAME,
    DOMAIN,
    API,
    LOGIN,
    REGISTER
}