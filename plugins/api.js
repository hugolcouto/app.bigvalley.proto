import axios from 'axios';

export const api = {
	getEvents: () => axios.get(`${process.env.NUXT_ENV_SYMPLA_API_URL}/sympla`),
	getSingleEvent: id => axios.get(`${process.env.NUXT_ENV_SYMPLA_API_URL}/events/${id}`)
}