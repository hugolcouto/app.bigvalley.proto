import axios from 'axios';

export const api = {
	getEvents: () => axios.get(`${process.env.SYMPLA_API_URL}/sympla`),
	getSingleEvent: id => axios.get(`${process.env.SYMPLA_API_URL}/events/${id}`)
}

console.log('TESTE', process.env.SYMPLA_API_URL)