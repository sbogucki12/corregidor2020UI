import React from 'react';
import HomeMobileHeader from './homeMobile/HomeMobileHeader';
import './homeMobile/homeMobile.scss';
import HomeMobileLinksList from './homeMobile/HomeMobileLinksList';
import HomeMobileValues from './homeMobile/homeMobileValues';
import constants from '../utils/constants';

const HomeMobile = (props) => {
    return (
		<main id="homeMobileBackground">
			<header id="homeMobileHeader">
				<HomeMobileHeader setShowRoutes={props.setShowRoutes} />
			</header>
			<div id="mobileHomeContainer">
				<div id="homeMobileTitleBox">
					<h1 id="homeMobileTitleText">{constants.CORREGIDOR}</h1>
					<h3 id="homeMobileTitleCaption">{constants.TECHNOLOGYSERVICES}</h3>
				</div>
				<div>
					<HomeMobileLinksList setShowRoutes={props.setShowRoutes} />
				</div>
				<div id="homeMobileValuesBox">
					<HomeMobileValues />
				</div>
			</div>
		</main>
	);
}

export default HomeMobile; 
