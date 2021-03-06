import React  from 'react';
import constants from '../../../utils/constants';
import '../homeDesktop.scss';
//import video from './globeVideoBG.mp4';

const VideoComponent = () => {
    return (
		<div style={{ position: 'relative' }}>
			<video
				autoPlay
				muted
				loop
				id="homeDesktopBGVideo"
				title={constants.CORREGIDORLOGOVIDEO}
				alt={constants.CORREGIDORLOGOVIDEO}
			>	
				{/*<source src={video} type="video/mp4" />*/}				
				<source src={process.env.PUBLIC_URL + '/public/globeVideoBG.mp4'} type="video/mp4" />
			</video>
			<div id="homeDesktopValueText">{constants.VALUESSTATEMENTLONG}</div>
		</div>
	);
}

export default VideoComponent;
