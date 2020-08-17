import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import '../homeDesktop.scss';
import { Link } from 'react-router-dom';
import constants from '../../../utils/constants';

const HomeDesktopServicesCard = (props) => {
    return (
		<div className="HomeCardsContainer">
			<div>
				<FontAwesomeIcon
					icon={faBolt}
					className="homeDesktopCardIcon"
					alt={constants.LIGHTNINGBOLTICON}
					title={constants.LIGHTNINGBOLTICON}
				/>
			</div>
			<div>
				<h2 className="homeDesktopCardText">{constants.WHATWEDO}</h2>
			</div>
			<div>
				<Link to="/services">
					<button
						className="homeDesktopCardButton"
						onClick={() => props.setShowRoutes(true)}
						alt={constants.LEARNMORE}
						title={constants.LEARNMORE}
					>
						{constants.LEARNMORE}
					</button>
				</Link>
			</div>
		</div>
	);
};

export default HomeDesktopServicesCard;
