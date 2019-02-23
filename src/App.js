import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/burgerBuilder/BurgerBuilder';

class App extends Component {
	render() {
		return (
			<div>
				<h1>Order Your Burger</h1>
				<Layout>
					<BurgerBuilder />
				</Layout>
			</div>
		);
	}
}

export default App;
