import React from 'react';
import Aux from '../../hoc/aux';

import './Header.css';

const header = props => (
	<Aux>
		<h1 className="Header__title">{props.title}</h1>
		<h2 className="Header__subtitle">{props.subtitle}</h2>
	</Aux>
);

export default header;
