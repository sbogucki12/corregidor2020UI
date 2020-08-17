import React from 'react';
import './homeMobile.scss';
import smallLogo from '../../utils/logographic.png';
import { Link } from "react-router-dom"
import constants from "../../utils/constants";

const HomeMobileHeader = (props) => {
    return (
		<div id="homeMobileHeaderContainer">
			<div>
				<img
					src={smallLogo}
					id="mobileHeaderLogoImg"
					alt={constants.CORREGIDORTECHNOLOGYSERVICESLOGO}
					title={constants.CORREGIDORTECHNOLOGYSERVICESLOGO}
				/>
			</div>
			<div id="homeMobileAboutButtonContainer">
				<Link to="/about">
					<button
						id="homeMobileAboutButton"
						onClick={() => props.setShowRoutes(true)}
						alt={constants.ABOUT}
						title={constants.ABOUT}
					>
						{constants.ABOUT}
					</button>
				</Link>
			</div>
		</div>
	);
};

export default HomeMobileHeader;
