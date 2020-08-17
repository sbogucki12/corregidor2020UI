import React from 'react';
import './homeDesktop.scss';
import HomeDesktopTopRow from './topRow/HomeDesktopTopRow';
import HomeDesktopCardRow from './cardRow/HomeDesktopCardRow';
import HomemDesktopValueRow from './valueRow/HomeDesktopValueRow';

const HomeDesktopBody = (props) => {
    return (
		<main id="homeDesktopBodyContainer">
			<div></div>
			<div className="homeDesktopBodyRow">
				<HomeDesktopTopRow />
			</div>
			<div></div>
			<div></div>
			<div className="homeDesktopBodyRow">
				<HomeDesktopCardRow setShowRoutes={props.setShowRoutes} />
			</div>
			<div></div>
			<div></div>
			<div className="homeDesktopBodyRow">
				<HomemDesktopValueRow />
			</div>
			<div></div>
		</main>
	);
};

export default HomeDesktopBody;
