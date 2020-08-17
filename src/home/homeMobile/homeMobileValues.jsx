import React from 'react';
import './homeMobile.scss';
import constants from "../../utils/constants";

const HomeMobileValues = () => {
    return (
		<div id="homeMobileValuesBG">
			<div id="homeMobileValuesText">{constants.VALUESTATEMENTSHORT}</div>
		</div>
	);
};

export default HomeMobileValues;
