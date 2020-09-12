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
					<div id="homeMobileSysAgileQuote">
						<h6 style={{ margin: '5px' }}>{constants.SYSENGAGILEQUOTE} </h6>
					</div>
				</div>

				<div>
					<HomeMobileLinksList setShowRoutes={props.setShowRoutes} />
				</div>
				<div id="homeMobileValuesBox">
					<HomeMobileValues />
				</div>
				<footer id="homeMobileFooter">
					<div>Duns: 117642352</div>
					<div>CAGE: 8PPJ9</div>
					<div>San Diego, CA USA</div>
				</footer>
			</div>
		</main>
	);
}

export default HomeMobile; 
