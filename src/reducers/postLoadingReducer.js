import { POST_LOADING } from '../actions/types'

export default (state = false, action) => {
    switch (action.type) {
        case POST_LOADING:
            return action.payload;
        default:
            return state
    }
}