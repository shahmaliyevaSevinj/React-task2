import { USERS_LIST, POSTS_LIST, DELETE_POST, DELETE_USER } from "./types";


export const setUsers = users => {
	return {
		type: USERS_LIST,
		payload: users
	};
};

export const setPosts = posts => {
	return {
		type: POSTS_LIST,
		payload: posts
	};
};


export const deleteUser = id => {
	return {
		type: DELETE_USER,
		payload: id
	};
};

export const deletePost = id => {
	return {
		type: DELETE_POST,
		payload: id
	};
};
