import React from 'react';
import '../homeDesktop.scss';
import logo from './logographic.png';
import constants from '../../../utils/constants';

const HomeDesktopTopRow = () => {
    return (
		<div>
			<div id="homeDesktopTopRowContainer">
				<div />
				<div>
					<div id="homeDesktopTopRowTitle">
						<h1>{constants.CORREGIDOR}</h1>
					</div>
					<div id="homeDesktopTopRowCaption">
						<h4>{constants.TECHNOLOGYSERVICES}</h4>
					</div>
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
			<div id="homeDesktopTopRowQuoteContainer">
				<caption>{constants.SYSENGAGILEQUOTE}</caption>
			</div>
		</div>
	);
};

export default HomeDesktopTopRow;
