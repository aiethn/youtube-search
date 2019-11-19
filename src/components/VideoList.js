import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => { //untuk mengganti dari props.videos.X menjadi videos.X saja
	const renderedList = videos.map(video => {
		return (
			<VideoItem 
			key={video.id.videoId} 
			onVideoSelect={onVideoSelect} 
			video={video} 
			/>
		);
	});


	return (
		<div className="ui relaxed divided list">{renderedList}</div>
	);
}

export default VideoList;