import { api } from '../plugins/api';

export const state = () => ({
	symplaEvents: [],
	isLoading: false
});

export const getters = {
	getSymplaEvents: state => state.symplaEvents,
	getIsLoading: state => state.isLoading
}

export const mutations = {
	FETCH_SYMPLA_EVENTS: (state, events) => state.symplaEvents = events,
	FETCH_SYMPLA_LOADING: (state, loadState) => state.isLoading = loadState 
}

export const actions = {
	fetchSymplaEvents({ commit, state }) {
		if(state.symplaEvents.length === 0) {
			commit('FETCH_SYMPLA_LOADING', true);
			api.getEvents()
				.then(response => {
					commit('FETCH_SYMPLA_EVENTS', response.data.data);
					commit('FETCH_SYMPLA_LOADING', false);
				})
				.catch(err => err);
		}
	}
}