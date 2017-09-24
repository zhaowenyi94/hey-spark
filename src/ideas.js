import {LIKE, FETCH_IDEAS_SUCCESS, FETCH_IDEAS_ERROR, POST_COMMENT, FETCH_IDEAS_ERROR} from './ActionTypes';

export default function ideas(state = [], action) {
	let newState = [...state];
	
	switch (action.type) {
		case LIKE:
			newState = state.map((news) => {
				if (ideas.id === action.id) {
					ideas.likes = rating(ideas.likes, action);
				}
				return news;
			});
			break;

		case POST_COMMENT:
			newState = state.map((news) => {
				if (ideas.id === action.id) {
					ideas.comment_table.push(action.comment);
				}
				return news;
			});
			break;

		case FETCH_IDEAS_SUCCESS:
			newState = [...action.ideas];
			break;

		case FETCH_IDEAS_ERROR:
			console.log('=========================');
			console.log(action);
			console.log('=========================');
			break;

		default: 
			break;
	}

	return newState;
}

function rating(state = 0, action) {
	switch (action.type) {
		case LIKE:
			return ++state;
		default: 
			return state;
	}
}