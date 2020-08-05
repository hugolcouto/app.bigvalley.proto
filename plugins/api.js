import axios from 'axios'

const defaultApi = axios.create({
    baseURL: process.env.NUXT_ENV_SYMPLA_API_URL,
    timeout: 15000,
    headers: {
        s_token: process.env.NUXT_ENV_SYMPLA_S_TOKEN,
        Accept: 'application/json',
    },
})

export const api = {
    getEvents: () => defaultApi.get('/events'),
    getSingleEvent: (id) => defaultApi.get(`/events/${id}`),
}
