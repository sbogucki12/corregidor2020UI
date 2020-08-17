import React from 'react';
import HomeDesktopServicesCard from './HomeDesktopServicesCard';
import '../homeDesktop.scss';
import HomeDesktopContactCard from './HomeDesktopContactCard';
import HomeDesktopExperienceCard from './HomeDesktopExperienceCard';

const HomeDesktopCardRow = (props) => {
    return (
		<div id="homeDesktopCardRowContainer">
			<div></div>
			<div className="homeDesktopCardRowCard">
				<HomeDesktopServicesCard setShowRoutes={props.setShowRoutes} />
			</div>
			<div className="homeDesktopCardRowCard">
				<HomeDesktopContactCard setShowRoutes={props.setShowRoutes} />
			</div>
			<div className="homeDesktopCardRowCard">
				<HomeDesktopExperienceCard setShowRoutes={props.setShowRoutes} />
			</div>
			<div></div>
		</div>
	);
};

export default HomeDesktopCardRow;
