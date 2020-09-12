import React from 'react';
import './homeMobile.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faEnvelope, faCheckCircle, faAngleRight, faUsers, faBullseye } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import constants from "../../utils/constants";

const HomeMobileLinksList = (props) => {
    return (
		<div id="homeMobileLinksListBox">
			<div className="homeMobileLinksListItem">
				<div>
					<FontAwesomeIcon
						icon={faBolt}
						className="homeDesktopCardIcon"
						alt={constants.MISSIONICON}
						titles={constants.MISSIONICON}
					/>
				</div>
				<div className="homeMobileLinkListText">{constants.SERVICES}</div>
				<Link to="/services">
					<div onClick={() => props.setShowRoutes(true)}>
						<FontAwesomeIcon
							icon={faAngleRight}
							className="homeDesktopCardIcon"
							alt={constants.CLICKHERE}
							title={constants.CLICKHERE}
						/>
					</div>
				</Link>
			</div>
			<div className="homeMobileLinksListItem">
				<div>
					<FontAwesomeIcon
						icon={faCheckCircle}
						className="homeDesktopCardIcon"
						alt={constants.EXPERIENCEICON}
						title={constants.EXPERIENCEICON}
					/>
				</div>
				<div className="homeMobileLinkListText">{constants.EXPERIENCE}</div>
				<Link to="/experience">
					<div onClick={() => props.setShowRoutes(true)}>
						<FontAwesomeIcon
							icon={faAngleRight}
							className="homeDesktopCardIcon"
							alt={constants.CLICKHERE}
							title={constants.CLICKHERE}
						/>
					</div>
				</Link>
			</div>
			<div className="homeMobileLinksListItem">
				<div>
					<FontAwesomeIcon
						icon={faEnvelope}
						className="homeDesktopCardIcon"
						alt={constants.ENVELOPEICON}
						title={constants.ENVELOPEICON}
					/>
				</div>
				<div className="homeMobileLinkListText">{constants.CONTACT}</div>
				<Link to="/contact">
					<div onClick={() => props.setShowRoutes(true)}>
						<FontAwesomeIcon
							icon={faAngleRight}
							className="homeDesktopCardIcon"
							alt={constants.CLICKHERE}
							title={constants.CLICKHERE}
						/>
					</div>
				</Link>
			</div>
			<div className="homeMobileLinksListItem">
				<div>
					<FontAwesomeIcon
						icon={faUsers}
						className="homeDesktopCardIcon"
						alt={constants.VALUESICON}
						title={constants.VALUESICON}
					/>
				</div>
				<div className="homeMobileLinkListText">{constants.VALUES}</div>
				<Link to="/values">
					<div onClick={() => props.setShowRoutes(true)}>
						<FontAwesomeIcon
							icon={faAngleRight}
							className="homeDesktopCardIcon"
							alt={constants.CLICKHERE}
							title={constants.CLICKHERE}
						/>
					</div>
				</Link>
			</div>
			<div className="homeMobileLinksListItem">
				<div>
					<FontAwesomeIcon
						icon={faBullseye}
						className="homeDesktopCardIcon"
						alt={constants.QUALITYICON}
						title={constants.QUALITYICON}
					/>
				</div>
				<div className="homeMobileLinkListText">{constants.QUALITY}</div>
				<Link to="/quality">
					<div onClick={() => props.setShowRoutes(true)}>
						<FontAwesomeIcon
							icon={faAngleRight}
							className="homeDesktopCardIcon"
							alt={constants.CLICKHERE}
							title={constants.CLICKHERE}
						/>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default HomeMobileLinksList;
