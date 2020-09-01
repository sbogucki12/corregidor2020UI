import React from 'react';
import "../subPages.scss";
import { Link } from "react-router-dom";
import constants from "../../utils/constants";
import qualityImage from './qualitymanagement.JPG';

const QualityMain = (props) => {
	return (
		<div className="servicesMainContainer">
			<div className="servicesMainBox">
				<div className="servicesMainTitleBox">
					<h1 className="servicesMainTitleText">{constants.QUALITY}</h1>
				</div>
				<h4>
					Feedback-driven, documented processes
                </h4>
                <div>
                    <img src={qualityImage} alt={constants.QUALITYDIAGRAM} title={constants.QUALITYDIAGRAM} id="qualityProcessDiagram"/>
                </div>
                <div>
                <p>The Corregidor Technology Services commitment to quality is defined by adherence to documented processes and a core belief in applying stakeholder feedback to update (and <i>document!</i>) those processes, as needed.</p>
                <p>During initial engagement, Corregidor Technology Services shares with the client our documented plan for analysis.  This plan includes templates for the artifacts that will be produced by Corregidor Technology Services as a result of analysis. Templates can be modified to meet client needs.</p>
                <p>During the system analysis phase, Corregidor Technology Services reports progress to the client per the milestones outlined in the initial plan for analysis.</p>
                <p>When system analysis is complete, the resultant artifacts produced by Corregidor Technology Services meet the templates promised during the initial planning phase.</p>
                <p>All artifacts include a mechanism for the client and associated stakeholders to provide feedback to Corregidor Technology Services.  Should Corregidor Technology Services produce an artifact that deviates from its template, any stakeholder can report its non-conformance.  Corregidor Technology Services has a documented plan for remediating all non-conformances, including a requirement to perform internal root cause analysis to ensure future non-conformances do not occur.</p>
                <p>As feedback is received, Corregidor Technology Services applies a change control process to update its process documentation.  Upon approval of updated process documents, Corregidor Technology Services adopts the modified practices, thus implementing a user-centric, feedback-guided, documented process-driven approach to professional system analysis and engineering.</p>
                </div>                
			</div>
		</div>
	);
};

export default QualityMain;
