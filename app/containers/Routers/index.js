/**
 *
 * Router.js

 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../containers/HomePage';
import ArticlePage from '../../containers/ArticlePage';
import TagsPage from '../../containers/TagsPage';
import Kit from '../../containers/Kit';
import Authentication from '../Auth/Authentication';
import Page404 from '../Page404';
import SnappLayout from '../../components/snappLayout';

function App() {
	return (
		<SnappLayout>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/article/:slug" component={ArticlePage} />
				<Route exact path="/tags/:slug" component={TagsPage} />
				<Route exact path="/kit" component={Kit} />
				<Route exact path="/authentication" component={Authentication} />
				<Route component={Page404} />
			</Switch>
		</SnappLayout>
	);
}

export default App;
