import React from 'react';
import "../subPages.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faLaptopCode, faPenFancy } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import constants from "../../utils/constants";

const ServicesMain = (props) => {
	return (
		<div id="servicesMainContainer">
			<div id="servicesMainBox">
				<div id="servicesMainTitle">
					<h1>Services</h1>
				</div>
				<div id="servicesMainCardRow">
					<div className="servicesMainCard">
						<div className="servicesCardTitle">
							<h3>{constants.SYSTEMENGINEERING}</h3>
						</div>
						<div className="servicesCardIcon">
							<FontAwesomeIcon
								icon={faCogs}
								className="homeDesktopCardIcon"
								alt={constants.ENGINEERINGICON}
								title={constants.ENGINEERINGICON}
							/>
						</div>
						<div className="servicesCardButtonContainer">
							<Link to="/servicesengineering">
							<button className="servicesCardButton">{constants.LEARNMORE}</button>
							</Link>
						</div>
					</div>
					<div className="servicesMainCard">
						<div className="servicesCardTitle">
							<h3>{constants.WEBDEVELOPMENT}</h3>
						</div>
						<div className="servicesCardIcon">
							<FontAwesomeIcon
								icon={faLaptopCode}
								className="homeDesktopCardIcon"
								alt={constants.WEBDEVICON}
								title={constants.WEBDEVICON}
							/>
						</div>
						<div className="servicesCardButtonContainer">
							<Link to="/webdevelopment">
								<button className="servicesCardButton">{constants.LEARNMORE}</button>
							</Link>
						</div>
					</div>
					<div className="servicesMainCard">
						<div className="servicesCardTitle">
							<h3>{constants.PROPOSALWRITING}</h3>
						</div>
						<div className="servicesCardIcon">
							<FontAwesomeIcon
								icon={faPenFancy}
								className="homeDesktopCardIcon"
								alt={constants.PROPOSALICON}
								title={constants.PROPOSALICON}
							/>
						</div>
						<div className="servicesCardButtonContainer">
							<Link to="/proposalwriting">
								<button className="servicesCardButton">{constants.LEARNMORE}</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServicesMain;
