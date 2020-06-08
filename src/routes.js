import React from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/home';

class Routes extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Switch>
					<Redirect exact={true} from="/" to="/home" isMobile={this.props.isMobile}/>
					<Route exact={true} path="/home" component={Home} />
					<Route render={() => <div> Page Not Found </div>} />
				</Switch>
			</React.Fragment>
		);
	}
}

export default (withRouter(Routes));
