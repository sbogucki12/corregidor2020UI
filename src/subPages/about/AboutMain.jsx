import React from 'react';
import "../subPages.scss";
import { Link } from 'react-router-dom';
import constants from '../../utils/constants';

const AboutMain = () => {
    return (
		<div id="experienceMainContainer">
			<div className="servicesMainBox">
				<div className="servicesMainTitleBox">
					<h3 className="servicesMainTitleText">{constants.CORREGIDORTECHNOLOGYSERVICES}</h3>
				</div>
				<div>
					<h5>Corregidor Technology Services is a service disabled-owned veteran small business.</h5>
					<p>
						We take pride in setting up your IT project for success by providing system design artifacts
						from our rigorous process-driven system engineering methodology that can be handed directly to
						your Agile team for implementation.
					</p>
					<p>
						We are technology-enthusiasts at Corregidor Technology Services and look forward to partnering
						with your organization to implement modern solutions that match stakeholder desires and business
						process needs.
					</p>
				</div>
				<div id="servicesMainContactButtonContainer">
					<Link to="/contact">
						<button id="servicesMainContactButton" alt={constants.CONTACTCTS} title={constants.CONTACTCTS}>
							{constants.CONTACTCTS}
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default AboutMain;
