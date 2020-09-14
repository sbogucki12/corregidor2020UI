import React from 'react';
import constants from '../../utils/constants';
import BackToServices from '../BackToServices';
import ContactUs from '../ContactUs';
import '../subPages.scss';

const WebDev = () => {
    return (
		<div className="servicesEngineeringContainer">
			<div className="servicesEngineeringBox">
				<div className="servicesEngineeringTitleBox">
					<h1 className="servicesEngineeringTitleText">{constants.WEBDEVELOPMENT}</h1>
				</div>
                <div style={{marginBottom: "20px"}}>
                <p>
                    After applying our professional systems engineering methodology to best understand your organization and stakeholder needs and design the system adequately suited, Corregidor Technology Services is happy to implement the solution that meets those requirements. 
                </p>
                <p>
                    Corregidor Technology Services is prepared to provide web and application development services, no matter the size or diversity of the project.  During implementation phase, Corregidor Technology Services practices Agile project development and project management principles, implementing features in sprints with regular reporting, metrics to which we are accountable, and product demonstrations at an expected cadence.  
                </p>
                <p>
                    The costs of our web and application development services varies dependent on the size and complexity of the project and may be at an hourly rate or for an agreed-upon total project fee.   Corregidor Technology Services can also assist deploying and monitoring your platform.  
                </p>
                </div>
                <div>
                    <ContactUs />
                </div>
            </div>
            <div>
                <BackToServices />
            </div>
		</div>
	);
};

export default WebDev;
