import React, { Component } from 'react';

import './BananaForm.css';
import Input from '../../components/Input/Input';
import Aux from '../../hoc/aux';
import BananaResults from '../../components/BananaResults/BananaResults';

class BananaForm extends Component {
	state = {
		startingDate: '',
		numberOfDays: 0,
		errorMessage: {},
		totalCost: 0
	};
	calculateCost(e) {
		e.preventDefault();
		let errorMessage = {};

		// Error message display logic
		if (this.state.startingDate === '') {
			errorMessage.startingDate = 'Please enter a start date';
		}
		if (this.state.numberOfDays < 1) {
			errorMessage.numberOfDays = 'Please enter a proper amount of days';
		}

		// if (this.state.numberOfDays >= 31) {
		// 	errorMessage.numberOfDays = 'Please select a value less than 31';
		// }

		if (Object.keys(errorMessage).length === 0) {
			// Logic to calculate total cost HERE
			let totalCost = 0;

			console.log(this.state.startingDate);
			let date = new Date(this.state.startingDate);

			let count = 0;
			// Logic to exclude weekends from calculation
			while (count < this.state.numberOfDays) {
				date.setDate(date.getDate() + 1);
				if (date.getDay() !== 0 && date.getDay() !== 6) {
					let day = date.getDate();
					if (day <= 7) {
						totalCost += 0.05;
					} else if (day <= 14) {
						totalCost += 0.1;
					} else if (day <= 21) {
						totalCost += 0.15;
					} else if (day <= 28) {
						totalCost += 0.2;
					} else {
						totalCost += 0.25;
					}
					count++;
				}
			}
			this.setState({
				totalCost: (Math.round(totalCost * 100) / 100).toFixed(2)
			});
		} else {
			this.setState({
				errorMessage
			});
		}
	}
	handleInputChange(e) {
		const { name, value } = e.target;
		let input = { ...this.state };
		input[name] = value;
		input.errorMessage[name] = '';
		input.totalCost = 0;

		this.setState(input);
	}
	render() {
		return (
			<Aux>
				<form onSubmit={this.calculateCost.bind(this)}>
					<Input
						type="date"
						title="Select a date"
						value={this.state.date}
						name="startingDate"
						onChange={this.handleInputChange.bind(this)}
						error={this.state.errorMessage.startingDate}
					/>
					<Input
						type="number"
						title="Enter number of days"
						value={this.state.days}
						name="numberOfDays"
						onChange={this.handleInputChange.bind(this)}
						error={this.state.errorMessage.numberOfDays}
					/>
					<button className="Banana__button" type="submit">
						Submit
					</button>
				</form>
				{this.state.totalCost > 0 && <BananaResults total={this.state.totalCost} days={this.state.numberOfDays} />}
			</Aux>
		);
	}
}

export default BananaForm;
