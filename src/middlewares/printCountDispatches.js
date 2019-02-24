export default (store) => (next) => (action) => {
	console.log(store.getState().counter)
	next(action)
}