import { USERS_LIST, DELETE_USER } from "../actions/types";

export default (state = null, action) => {
	switch (action.type) {
		case USERS_LIST:
			return action.payload;
		case DELETE_USER:
			return state.filter(({ id }) => id !== action.payload);
		default:
			return state;
	}
};

