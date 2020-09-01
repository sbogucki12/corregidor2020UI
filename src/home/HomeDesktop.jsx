import React from 'react';
import HomeDesktopHeader from './homeDesktop/HomeDesktopHeader';
import HomeDeskTopBody from './homeDesktop/HomeDesktopBody';
import './homeDesktop/homeDesktop.scss';

const HomeDesktop = (props) => {
    return (
		<div>
			<header id="homeDesktopHeader">
				<HomeDesktopHeader setShowRoutes={props.setShowRoutes} />
			</header>
			<div id="homeDesktopBody">
				<HomeDeskTopBody setShowRoutes={props.setShowRoutes} />
			</div>
			<footer id="homeDesktopFooter">
				<div>DUNS: 117642352 </div>
				<div>CAGE: 8PPJ9</div>
				<div>San Diego, CA USA</div>
			</footer>
		</div>
	);
}

export default HomeDesktop; 
