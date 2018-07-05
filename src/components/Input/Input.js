import React from 'react';

import './Input.css';

const input = props => {
	return (
		<div className="Input">
			<label className="Input__label">{props.title}</label>
			<input
				className="Input__input"
				type={props.type}
				placeholder={props.placeholder}
				value={props.value}
				onChange={props.onChange}
				name={props.name}
			/>
			{props.error && <div className="Input__error">{props.error}</div>}
		</div>
	);
};

export default input;
