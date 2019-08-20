import React from 'react';

const VideoDetail = (props) => {
    const video = props.video;

    if(!video){
        return null;
    }
    
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    
    var date =  video.snippet.publishedAt.split("T");
    
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>Published At : {date[0]}
                </div>
                <br />
                <div className = "font-weight-bold">{video.snippet.title}</div>
                <br />
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;