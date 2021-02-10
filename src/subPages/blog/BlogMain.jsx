import React from 'react';
import constants from '../../utils/constants.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import blogList from '../../home/homeDesktop/blogRow/blogList.js';

const listOfBlogs = blogList.map((blog) => (
	<a href={blog.url} target="_blank" rel="noopener noreferrer" key={blog.id}>
		<li style={{ marginBottom: '1%' }}>
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

function BlogMain() {
	return (
		<div id="mobileBlogListContainer">
			<div id="mobileBlogListBox">
				<div id="mobileBlogTitleContainer">
					<div>
						<FontAwesomeIcon
							icon={faQuoteLeft}
							className="contactMainSocialIcon"
							alt="Blog"
							title="Blog"
							style={{ fontSize: '2rem' }}
						/>
					</div>
					<div>
						<h2 id="mobileBlogTitleText">{constants.BLOGTITLE}</h2>
					</div>
				</div>
				<div>
					<ul id="blogEntryList">{listOfBlogs}</ul>
				</div>
			</div>
		</div>
	);
}

export default BlogMain;
