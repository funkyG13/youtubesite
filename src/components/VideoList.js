import React from 'react';
import VideoItem from './VideoItem';

// const VideoList = props =>{

//     return(<div>{props.videos.length}</div>);
// }

//or the same as above
const VideoList = ({videos, onVideoSelect}) =>{

    const renderedList = videos.map(video =>{
        return(
        <VideoItem key={video.id.channelId} 
        onVideoSelect={onVideoSelect} 
        video={video}
        />
        );
    });

    return(
    <div className="ui relaxed divided list">
    {renderedList}
    </div>
    );
};

export default VideoList;