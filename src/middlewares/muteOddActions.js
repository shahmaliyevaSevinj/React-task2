import { USER_LOADING, POST_LOADING } from '../actions/types';

export default (store) => (next) => (action) => {
    if ((action.type === USER_LOADING && !action.payload)
        || (action.type === POST_LOADING && !action.payload))
        { next(action)}

    if (store.getState().counter % 2 === 1) {

        store.getState().counter++;
        return;
    }else {
       // console.log(store.getState().counter)
        next(action)
    }
}