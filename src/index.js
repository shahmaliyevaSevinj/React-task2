import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import App from "./components/App";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import reducers from "./reducers";
import printCountofDispatches from './middlewares/printCountDispatches';
import muteOddActions from './middlewares/muteOddActions';
import dublicateActions from './middlewares/diblicateActions'

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk, printCountofDispatches, dublicateActions, muteOddActions)));
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector("#root")
);
