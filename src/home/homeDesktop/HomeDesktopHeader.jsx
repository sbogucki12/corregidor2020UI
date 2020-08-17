import React from 'react';
import logo from '../../utils/logographic.png';
import './homeDesktop.scss';
import { Link } from 'react-router-dom';
import constants from '../../utils/constants';

const HomeDesktopHeader = (props) => {
    return (
		<div id="homeDesktopHeaderContainer">
			<div />
			<div id="homeDesktopHeaderLeftLogo">
				<img
					src={logo}
					id="homeDesktopHeaderLeftLogoImg"
					alt={constants.CORREGIDORTECHNOLOGYSERVICESLOGO}
					title={constants.CORREGIDORTECHNOLOGYSERVICESLOGO}
				/>
			</div>
			<div />
			<div id="desktopHeaderAboutButtonContainer">
				<Link to="/about">
					<button
						id="desktopHeaderAboutButton"
						onClick={() => props.setShowRoutes(true)}
						alt={constants.ABOUT}
						title={constants.ABOUT}
					>
						{constants.ABOUT}
					</button>
				</Link>
			</div>
			<div />
		</div>
	);
};

export default HomeDesktopHeader;
