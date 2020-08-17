import React from 'react';
import "../subPages.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrosoft, faReact, faJsSquare, faAws, faDocker, faNode } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import constants from "../../utils/constants";

const icons = [
	{
		id: 0,
		filePath: faMicrosoft,
		alt: constants.MICROSOFTICON,
		title: constants.MICROSOFTICON,
	},
	{
		id: 1,
		filePath: faAws,
		alt: constants.AWSICON,
		title: constants.AWSICON,
	},
	{
		id: 2,
		filePath: faJsSquare,
		alt: constants.JAVASCRIPTICON,
		title: constants.JAVASCRIPTICON,
	},
	{
		id: 3,
		filePath: faReact,
		alt: constants.REACTICON,
		title: constants.REACTICON,
	},
	{
		id: 4,
		filePath: faDocker,
		alt: constants.DOCKERICON,
		title: constants.DOCKERICON,
	},
	{
		id: 5,
		filePath: faNode,
		alt: constants.NODEICON,
		title: constants.NODEICON,
	},
];

const iconView = icons.map((icon) => (
	<div className="experienceMainIcon" key={icon.id}>
		<div>
			<FontAwesomeIcon icon={icon.filePath} className="contactMainSocialIcon" alt={icon.alt} title={icon.title} />
		</div>
	</div>
));

const ExperienceMain = () => {
    return (
		<div id="experienceMainContainer">
			<div className="servicesMainBox">
				<div className="servicesMainTitleBox">
					<h1 className="servicesMainTitleText">{constants.TECHNOLOGIES}</h1>
				</div>
				<div>
					<h4>
						At Corregidor Technology Services, we believe in using the appropriate technologies best suited
						for the use-cases presented by your business processes and system stakeholders.{' '}
					</h4>
					<p>
						We have analyzed legacy systems in all shapes and forms (think on-premise, enterprise-level
						Windows Communication Foundation, enterprise service bus, domain controllers, Active Directory
						and SOAP/XML) and have designed architectures as varied, ranging from Okta identity management
						integration, AWS with Fargate clusters to .NET Core microservices in containers deployed to
						Azure.{' '}
					</p>
				</div>
				<div id="experienceMainIconContainer">{iconView}</div>
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

export default ExperienceMain;
