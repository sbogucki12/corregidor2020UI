import React from 'react';
import constants from '../../../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import blogList from './blogList';

const listOfBlogs = blogList.map((blog) => (
	<a href={blog.url} target="_blank" rel="noopener noreferrer" key={blog.id}>
		<li>
			<span className="blogEntryTitle">
				{blog.title}
				{` `}
			</span>
			<span className="blogEntryAuthor">
				- {blog.author}
				{` `}
				{blog.publicationDate}{' '}
			</span>
		</li>
	</a>
));

function HomeDesktopBlogRow() {
	return (
		<div id="homeDesktopBlogRowContainer">
			<div id="homeDesktopBlogRowLeftBox"></div>
			<div id="homeDesktopBlogRowMiddleBox">
				<div>
					<div id="homeDesktopBlogRowMiddleBoxTitleContainer">
						<div>
							<FontAwesomeIcon
								icon={faQuoteLeft}
								className="contactMainSocialIcon"
								alt="Blog"
								title="Blog"
							/>
						</div>
						<div>
							<h1 id="homeDesktopBlogRowBlogTitleText">{constants.BLOGTITLE}</h1>
						</div>
					</div>
					<div>
						<ul id="blogEntryList">{listOfBlogs}</ul>
					</div>
				</div>
			</div>
			<div id="homeDesktopBlogRowRightBox"></div>
		</div>
	);
}

export default HomeDesktopBlogRow;
