import React, { Component } from 'react';
import './App.css';

import BananaForm from './container/BananaForm/BananaForm';
import Header from './components/Header/Header';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header title="Micr0soft" subtitle="Banana Purchaser 2018" />
				<BananaForm />
				<div className="App__disclaimer">
					*Unauthorized use/sale of this app will result in persecution - Bill Fences, Chairman of Micr0soft
				</div>
			</div>
		);
	}
}

export default App;
