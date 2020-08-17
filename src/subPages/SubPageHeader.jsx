import React from 'react';
import headerLogo from '../utils/logographic.png';
import constants from "../utils/constants";

const SubPageHeader = () => {
    return (
		<div id="subPageHeaderContainer">
			<div>
				<img
					src={headerLogo}
					id="subPageHeaderLogo"
					alt={constants.CORREGIDORTECHNOLOGYSERVICES}
					title={constants.CORREGIDORTECHNOLOGYSERVICESLOGO}
				/>
			</div>
		</div>
	);
};

export default SubPageHeader;
