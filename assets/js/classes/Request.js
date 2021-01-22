import Message from './Message.js'

export default class Request {
    static ajax(props) {
        let
            { url, cbSuccess, errorMessage = 'Something Wrong!' } = props

        fetch(url)
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(json => cbSuccess(json))
            .catch(err => {
                new Message('danger', errorMessage)
            })
    }
}