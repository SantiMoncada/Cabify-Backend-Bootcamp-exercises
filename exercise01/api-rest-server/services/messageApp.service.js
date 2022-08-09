const axios = require('axios')

class MessageappService {
    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.MESSAGE_APP_URL}`
        })
    }

    sendMessage({ destination, body }) {
        console.log({ destination, body })
        return this.api.post(`/message`, { destination, body })
    }
}

module.exports = new MessageappService()