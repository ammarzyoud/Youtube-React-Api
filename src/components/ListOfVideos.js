import React from 'react';
import VideoListItem from './VideosItems';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem 
                onUserSelected={props.onVideoSelect}           
                key={video.etag} 
                video={video} />
        );
    });

    return (
        <ul className="col-md-4">
            {videoItems}
        </ul>
    );
};

export default VideoList;