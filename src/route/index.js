import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from '../views/home';

class RouterIndex extends Component {
    render() {
        return (
            <Router>
				<Switch>
					<Route exact path="/home" component={Home} />
				</Switch>
			</Router>
        )
    }
}

export default RouterIndex;