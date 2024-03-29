import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './subPages.scss';
import SubPageHeader from './SubPageHeader';
import ServicesMain from './services/ServicesMain';
import ContactMain from './contact/ContactMain';
import AboutMain from './about/AboutMain';
import ExperienceMain from './experience/ExperienceMain';
import constants from '../utils/constants';
import ValuesMain from './values/ValuesMain';
import QualityMain from './quality/QualityMain';
import ServicesEngineering from './services/ServicesEngineering';
import WebDev from './services/WebDev';
import ProposalWriting from './services/ProposalWriting';
import BlogMain from './blog/BlogMain';

const SubPageMain = (props) => {
	const location = useLocation();
	let view = <ServicesMain />;

	switch (location.pathname) {
		case '/services':
			view = <ServicesMain />;
			break;
		case '/contact':
			view = <ContactMain />;
			break;
		case '/about':
			view = <AboutMain />;
			break;
		case '/experience':
			view = <ExperienceMain />;
			break;
		case '/values':
			view = <ValuesMain />;
			break;
		case '/quality':
			view = <QualityMain />;
			break;
		case '/servicesengineering':
			view = <ServicesEngineering />;
			break;
		case '/webdevelopment':
			view = <WebDev />;
			break;
		case '/proposalwriting':
			view = <ProposalWriting />;
			break;
		case '/blog':
			view = <BlogMain />;
			break;
		default:
			view = <AboutMain />;
	}

	return (
		<div id="subPageMainContainer">
			<header id="subpageHeaderPosition">
				<SubPageHeader />
			</header>
			<div>
				<div>{view}</div>
				<div id="subPageMainHomeButtonContainer">
					<Link to="/">
						<button id="subPageMainHomeButton" alt={constants.HOME} title={constants.HOME}>
							{constants.HOME}
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SubPageMain;
