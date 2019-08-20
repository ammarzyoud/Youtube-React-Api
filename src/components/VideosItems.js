import React from 'react';

const VideoListItem = (props) => {
    const video = props.video;
    const onUserSelected = props.onUserSelected;
    const imageUrl = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title

    return (
    <li onClick={() => onUserSelected(video)} className="list-group-item">
        <div>
            <div className="media-left">
                <img className="media-object" src={imageUrl} />
            </div>
            <div className="media-body">
                <div className="media-heading">{videoTitle}</div>
            </div>
        </div>
    </li>
    );
};

export default VideoListItem;