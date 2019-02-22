import { POSTS_LIST, DELETE_POST } from "../actions/types";

export default (state = null, action) => {
	switch (action.type) {
		case POSTS_LIST:
			return action.payload;
		case DELETE_POST:
			return state.filter(({ id }) => id !== action.payload);
		default:
			return state;
	}
};


