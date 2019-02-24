import { USER_LOADING } from '../actions/types'

export default (state = false, action) => {
    switch (action.type) {
        case USER_LOADING:
            return action.payload
        default: 
        return state;
    }
}