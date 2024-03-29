import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../app/App';
import SubPageMain from '../subPages/SubPageMain';

const Routing = (props) => (
	<Fragment>
		<Switch>
			<Route exact path="/">
				<App />
			</Route>
			<Route exact path="/services">
				<SubPageMain />
			</Route>
			<Route exact path="/contact">
				<SubPageMain />
			</Route>
			<Route exact path="/experience">
				<SubPageMain />
			</Route>
			<Route exact path="/about">
				<SubPageMain />
			</Route>
			<Route exact path="/values">
				<SubPageMain />
			</Route>
			<Route exact path="/quality">
				<SubPageMain />
			</Route>
			<Route exact path="/servicesengineering">
				<SubPageMain />
			</Route>
			<Route exact path="/webdevelopment">
				<SubPageMain />
			</Route>
			<Route exact path="/proposalwriting">
				<SubPageMain />
			</Route>
			<Route exact path="/blog">
				<SubPageMain />
			</Route>
		</Switch>
	</Fragment>
);

export default Routing;
