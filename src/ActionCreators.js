import {
		SIGN_IN, 
		LOG_OUT,
		LIKE,
		FETCH_IDEAS_ERROR,
		FETCH_IDEAS_SUCCESS,
		FETCH_USERS_SUCCESS,
		FETCH_USERS_ERROR,
		POST_COMMENT
	} from './ActionTypes';

export function signIn(login) {
	return {type: SIGN_IN, login};
}

export function logOut() {
	return {type: LOG_OUT};
}

export function like(id) {
	return {type: LIKE, id};
}


export function getIdeas() {
	return (dispatch) => fetchIdeas().then(
				(ideas) => dispatch( {type: FETCH_IDEAS_SUCCESS, ideas} ),
				(error) => dispatch( {type: FETCH_IDEAS_ERROR, message: error} )
			);
}

export function getUsers() {
	return (dispatch) => fetchUsers().then(
				(users) => dispatch( {type: FETCH_USERS_SUCCESS, users} ), 
				(error) => dispatch( {type: FETCH_USERS_ERROR, message: error} )
			);
}

export function postComment(newsId, comment) {
	return {type: POST_COMMENT, id: newsId, comment: comment};
}

/**
* Helper functions
**/
function fetchIdeas() {
	return new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
	    	if (xhr.readyState === 4) {
	    		if (xhr.status === 200) {
	    			resolve(JSON.parse(xhr.responseText).ideas);
	    		} else {
	    			reject(xhr.responseText.error);
	    		}
	    	} 
	    };
	    xhr.open('GET', '/Data/Idea.json');
	    xhr.send();
	});
}

function fetchUsers() {
	return new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
	    	if (xhr.readyState === 4) {
	    		if (xhr.status === 200) {
	    			resolve(JSON.parse(xhr.responseText).users);
	    		} else {
	    			reject(xhr.responseText.error);
	    		}
	    	} 
	    };
	    xhr.open('GET', '/Dara/User.json');
	    xhr.send();
	});
}