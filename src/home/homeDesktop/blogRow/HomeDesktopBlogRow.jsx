import React from 'react';
import constants from '../../../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

function HomeDesktopBlogRow() {
    return (
        <div id="homeDesktopBlogRowContainer">
            <div id="homeDesktopBlogRowLeftBox">
                
            </div>
            <div id="homeDesktopBlogRowMiddleBox">
                <div>
                    <div id="homeDesktopBlogRowMiddleBoxTitleContainer">
                        <div>
                            <FontAwesomeIcon icon={faQuoteLeft} className="contactMainSocialIcon" alt="Blog" title="Blog" />
                        </div>
                        <div>
                        <h1 id="homeDesktopBlogRowBlogTitleText">
                            {constants.BLOGTITLE}
                        </h1>
                        </div>

                    </div>
                    <div>
                        <ul id="blogEntryList">
                            <li><span className="blogEntryTitle">Blog{``}</span><span className="blogEntryAuthor">- Author Date</span></li>
                            <li><span className="blogEntryTitle">Blog{``}</span ><span className="blogEntryAuthor">- Author Date</span></li>
                            <li><span className="blogEntryTitle">Blog{``}</span><span className="blogEntryAuthor">- Author Date</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="homeDesktopBlogRowRightBox">
                
            </div>          
        </div>
    )
}

export default HomeDesktopBlogRow; 
