import {
	USERS_LIST, POSTS_LIST, DELETE_POST,
	DELETE_USER, USER_LOADING, POST_LOADING
} from "./types";
import axios from "axios";

export const setUsers = () => async dispatch => {
	dispatch(userLoading(true))
	return await axios.get("https://jsonplaceholder.typicode.com/users")
		.then(({ data }) => {
			dispatch(users(data))
		}).then(() => {dispatch(userLoading(false))
		}).catch((err) => {console.log(err)
		})
}

const users = data => {
	return {
		type: USERS_LIST,
		payload: data
	};
};

const userLoading = data => {
	return {
		type: USER_LOADING,
		payload: data
	};
};

export const setPosts = () => async dispatch => {
	dispatch(postLoading(true))
	return await axios.get("https://jsonplaceholder.typicode.com/posts")
		.then(({ data }) => { dispatch(posts(data)) })
		.then(() => {dispatch(postLoading(false))})
		.catch((error) => {console.log(error)})
}

const posts = posts => {
	return {
		type: POSTS_LIST,
		payload: posts
	};
};

const postLoading = (data) => {
	return {
		type: POST_LOADING,
		payload: data
	}
}




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
