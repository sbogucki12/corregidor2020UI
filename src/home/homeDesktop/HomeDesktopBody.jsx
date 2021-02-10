import React from 'react';
import './homeDesktop.scss';
import HomeDesktopTopRow from './topRow/HomeDesktopTopRow';
import HomeDesktopCardRow from './cardRow/HomeDesktopCardRow';
import HomemDesktopValueRow from './valueRow/HomeDesktopValueRow';
import HomeDesktopInclusionBox from './policyRow/HomeDesktopInclusionBox';
import HomeDesktopQualityBox from './policyRow/HomeDesktopQualityBox';
import HomeDesktopBlogRow from './blogRow/HomeDesktopBlogRow';

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
			<div id="homeDesktopPolicyRow">
				<div></div>
				<div className="homeDesktopPolicyBoxes">
					<HomeDesktopInclusionBox setShowRoutes={props.setShowRoutes} />
				</div>
				<div className="homeDesktopPolicyBoxes">
					<HomeDesktopQualityBox setShowRoutes={props.setShowRoutes} />
				</div>
				<div></div>
			</div>
			<div></div>
			<div></div>
			<div id="homeDesktopBlogRow">
				<HomeDesktopBlogRow />
			</div>
			<div></div>
			<div></div>
			<div className="homeDesktopBodyRow" style={{marginBottom: "30px"}}>
				<HomemDesktopValueRow />
			</div>
			<div></div>
		</main>
	);
};

export default HomeDesktopBody;
