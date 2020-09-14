import React from 'react';
import './subPages.scss';
import { Link } from 'react-router-dom';
import constants from '../utils/constants';

const ContactUs = () => {
    return (
		<div id="servicesEngineeringContactButtonContainer">
			<div id="contactUsLine" />
			<Link to="/contact">
				<button id="servicesEngineeringContactButton" alt={constants.CONTACTCTS} title={constants.CONTACTCTS}>
					{constants.CONTACTCTS}
				</button>
			</Link>
		</div>
	);
}

export default ContactUs;
