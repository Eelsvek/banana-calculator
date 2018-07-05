import React from 'react';

import './BananaResults.css';

const bananaResults = props => {
	let dayLabel = '';
	props.days > 1 ? (dayLabel = 'days') : (dayLabel = 'day');
	return (
		<div className="Results">
			You should set aside <span className="Results--bold">${props.total}</span> in order to buy enough bananas for{' '}
			<span className="Results--bold">{props.days}</span> {dayLabel}.
		</div>
	);
};

export default bananaResults;
