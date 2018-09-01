import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';


import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store';

import Router from './route';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
		<Router />
	</Provider>,
    document.getElementById('root')
);
registerServiceWorker();
