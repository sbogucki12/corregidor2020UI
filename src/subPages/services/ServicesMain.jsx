import React from 'react';
import "../subPages.scss";
import { Link } from "react-router-dom";
import constants from "../../utils/constants";

const ServicesMain = (props) => {
	return (
		<div className="servicesMainContainer">
			<div className="servicesMainBox">
				<div className="servicesMainTitleBox">
					<h1 className="servicesMainTitleText">{constants.SERVICES}</h1>
				</div>
				<h4>
					Corregidor Technology Services guides your organization in modernizing its legacy IT systems by
					applying a process-driven, documented system engineering approach.{' '}
				</h4>
				<p style={{ textAlign: 'start', marginLeft: '1%' }}>
					<i>Phase 1</i> Analysis:
				</p>
				<p>
					During the analysis phase, Corregidor Technology Services learns your organization and its business
					process. The outcomes of this phase include:
				</p>
				<ul style={{ textAlign: 'start', marginLeft: '3%' }}>
					<li>Shortfall Analysis</li>
					<li>Gap Analysis</li>
					<li>"Current State" Data Models (Conceptual, Logical, Physical)</li>
					<li>Range of Solutions (including Cost Benefit Analysis)</li>
					<li>Business Process Maps</li>
				</ul>
				<p style={{ textAlign: 'start', marginLeft: '1%' }}>
					<i>Phase 2</i> System Design:
				</p>
				<p>
					During the system design phase, Corregidor Technology Services architects the modernization /
					replacement system that will best benefit your organization. The outcomes of this phase include:
				</p>
				<ul style={{ textAlign: 'start', marginLeft: '3%' }}>
					<li>Case for Change</li>
					<li>Concept of Operations</li>
					<li>Interface Control Documents</li>
					<li>Functional Analysis</li>
					<li>"To Be State" Data Models (Conceptual, Logical, Physical)</li>
					<li>Test and Evaluation Master Plans</li>
					<li>Verification and Validation Models</li>
					<li>Requirements Document</li>
				</ul>
				<div id="servicesMainWebDev">
					<p>CTS is also happy to provide ad-hoc web development services.</p>
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
};

export default ServicesMain;