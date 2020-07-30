import axios from 'axios';

export const api = {
	getEvents: () => axios.get(`${process.env.API_URL_SYMPLA}/sympla`),
	getSingleEvent: id => axios.get(`${process.env.API_URL_SYMPLA}/events/${id}`)
}
