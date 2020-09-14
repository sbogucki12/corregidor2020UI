import React from 'react';
import constants from '../../utils/constants';
import BackToServices from '../BackToServices';
import ContactUs from '../ContactUs';
import '../subPages.scss';

const ProposalWriting = () => {
    return (
		<div className="servicesEngineeringContainer">
			<div className="servicesEngineeringBox">
				<div className="servicesEngineeringTitleBox">
					<h1 className="servicesEngineeringTitleText">{constants.PROPOSALWRITING}</h1>
				</div>
                <div>
                <p>
                    At Corregidor Technology Services, we take pride in strategic thinking and appreciate the opportunity to apply this perspective to designing highly scalable, complex, secure technology solutions.  One of the most satisfying exercises in system design is crafting the <b>technical description</b> for government contract proposals.  
                </p>
                <p>
                    For your organization, thinking through and putting these ideas to text is <i>work</i>.  At Corregidor Technology Services, it is our <b>passion</b>. 
                </p>
                <p>
                    In partnership with your stakeholders and subject matter experts, Corregidor Technology Services will quickly internalize your business processes and concept of operations.  We then review the request that your organization is considering, and design a technology solution in collaboration with your team.  Corregidor Technology Services will draft the technical solution that describes a system that fits the needs of the solicitor and highlights the capabilities of your organization. 
                </p>
                <p>
                    Please contact us to request more information about how Corregidor Technology Services can help your organization achieve its next award. We are available via contract as an on-call service or for proposal-by-proposal work for a fee.     
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

export default ProposalWriting;
