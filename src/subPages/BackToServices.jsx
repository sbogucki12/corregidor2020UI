import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import constants from '../utils/constants';
import { Link } from 'react-router-dom';

const BackToServices = () => {
    return (
		<div id="backToServicesContainer">
            <div id="backToServicesBox">
                <div>
                    <Link to="/services">
                        <FontAwesomeIcon
                            icon={faArrowAltCircleLeft}
                            className="backToServicesIcon"
                            alt={constants.BACKARROW}
                            title={constants.BACKTOSERVICES}
                        />
                    </Link>
                </div>
            </div>
		</div>
	);
};

export default BackToServices;
