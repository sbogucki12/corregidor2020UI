import React from 'react';
import '../homeDesktop.scss';
import logo from './logographic.png';
import constants from '../../../utils/constants';

const HomeDesktopTopRow = () => {
    return (
		<div id="homeDesktopTopRowContainer">
			<div />
			<div>
				<div id="homeDesktopTopRowTitle">{constants.CORREGIDOR}</div>
				<div id="homeDesktopTopRowCaption">{constants.TECHNOLOGYSERVICES}</div>
			</div>
			<div>
				<img
					src={logo}
					id="homeDesktopTopRowLogoImg"
					alt={constants.CORREGIDORTECHNOLOGYSERVICESLOGO}
					title={constants.CORREGIDORTECHNOLOGYSERVICESLOGO}
				/>
			</div>
			<div />
		</div>
	);
};

export default HomeDesktopTopRow;
