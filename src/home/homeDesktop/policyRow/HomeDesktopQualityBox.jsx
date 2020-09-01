import React from 'react';
import '../homeDesktop.scss';
import constants from '../../../utils/constants';
import { Link } from 'react-router-dom';

const HomeDesktopQualityBox = (props) => {
	return (
		<div className="homeDesktopPolicyContainer">
			<div className="homeDesktopPolicyTitleRow">
				<h1>{constants.QUALITY}</h1>
			</div>
			<div className="homeDesktopPolicyCaptionRow">
				<h4>{constants.QUALITYCAPTION}</h4>
			</div>
			<div>
				<Link to="/quality">
					<button className="homeDesktopPolicyButton" onClick={() => props.setShowRoutes(true)}>
						{constants.POLICY}
					</button>
				</Link>
			</div>
		</div>
	);
};

export default HomeDesktopQualityBox;
