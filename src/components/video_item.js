import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
    //Instead of below code by using ES6 pass video in {} instead of props
    // const video =props.video

    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;