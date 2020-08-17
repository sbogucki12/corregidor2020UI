import React from 'react';
import './homeMobile.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faEnvelope, faCheckCircle, faAngleRight } from '@fortawesome/free-solid-svg-icons';
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
						alt={constants.LIGHTNINGBOLTICON}
						titles={constants.LIGHTNINGBOLTICON}
					/>
				</div>
				<div className="homeMobileLinkListText">{constants.WHATWEDO}</div>
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
						alt={constants.CHECKMARKICON}
						title={constants.CHECKMARKICON}
					/>
				</div>
				<div className="homeMobileLinkListText">{constants.OUREXPERIENCE}</div>
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
				<div className="homeMobileLinkListText">{constants.CONTACTCTS}</div>
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
		</div>
	);
};

export default HomeMobileLinksList;
