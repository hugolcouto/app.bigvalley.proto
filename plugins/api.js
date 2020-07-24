import axios from 'axios';

export default (context, inject) => {
	const api = {
		getEvents: () => axios.get(process.env.MEETUP_API_URL),
	}
	inject('api', api);
	context.$api = api;
}