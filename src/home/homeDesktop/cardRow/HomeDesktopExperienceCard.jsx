import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import '../homeDesktop.scss';
import { Link } from 'react-router-dom';
import constants from '../../../utils/constants';

const HomeDesktopExperienceCard = (props) => {
    return (
		<div className="HomeCardsContainer">
			<div>
				<FontAwesomeIcon
					icon={faCheckCircle}
					className="homeDesktopCardIcon"
					alt={constants.CHECKMARKICON}
					title={constants.CHECKMARKICON}
				/>
			</div>
			<div>
				<h2 className="homeDesktopCardText">{constants.OUREXPERIENCE}</h2>
			</div>
			<div>
				<Link to="/experience">
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

export default HomeDesktopExperienceCard;
