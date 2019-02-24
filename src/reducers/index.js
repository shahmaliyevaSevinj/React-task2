import { combineReducers } from "redux";
import userReducer from "./userReducer";
import postReducer from "./postReducer";
import counterReducer from './counterReducer';
import userLoading from './userLoadingReducer';
import postLoading from './postLoadingReducer';


export default combineReducers({	
	posts: postReducer,
	users: userReducer,
	counter: counterReducer,
	userLooading : userLoading,
	postLoading : postLoading
});
