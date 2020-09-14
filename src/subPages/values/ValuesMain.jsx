import React from 'react';
import "../subPages.scss";
import constants from "../../utils/constants";

const ValuesMain = (props) => {
	return (
		<div className="servicesEngineeringContainer">
			<div className="servicesEngineeringBox">
				<div className="servicesEngineeringTitleBox">
					<h1 className="servicesEngineeringTitleText">{constants.VALUES}</h1>
				</div>                
                <p>It is the mission of Corregidor Technology Services to be known among new entrants to the technology workforce as an organization that will provide opportunity to those with the intellectual curiosity and dedication to learn and apply new skills and aptitudes.  From another aspect, Corregidor Technology Services is a catalyst for positive change by striving to drive democratic practices into government processes by open-sourcing development initiatives, sharing data for community analysis, and modernizing and making accessible government technologies. </p>
                <p>A portion of all earnings achieved by Corregidor Technology Services is donated to charitable organizations that provide scholarships to students who would otherwise struggle to afford a university education.</p>
                <p>Corregidor Technology Services is committed to hiring from state universities and recruiting from Historically Black College and Universities.</p>
                <p>Corregidor Technology Services will initiate an internship program when we meet the milestone of 50th employee hired or a contract award metric.</p>
                <p>Corregidor Technology Services is driven to provide opportunity to all who earn it.  And, with that opportunity, members of the Corregidor Technology Services team will contribute to an organization that has at its core a mission to positively impact society by improving government processes.</p>
			</div>
		</div>
	);
};

export default ValuesMain;
