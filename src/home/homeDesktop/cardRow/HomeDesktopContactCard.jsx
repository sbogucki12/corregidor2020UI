import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../homeDesktop.scss';
import { Link } from 'react-router-dom';
import constants from '../../../utils/constants';

const HomeDesktopContactCard = (props) => {
    return (
		<div className="HomeCardsContainer">
			<div>
				<FontAwesomeIcon
					icon={faEnvelope}
					className="homeDesktopCardIcon"
					alt={constants.ENVELOPEICON}
					title={constants.ENVELOPEICON}
				/>
			</div>
			<div>
				<h2 className="homeDesktopCardText">{constants.CONTACTCTS}</h2>
			</div>
			<div>
				<Link to="/contact">
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

export default HomeDesktopContactCard;
