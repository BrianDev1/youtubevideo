import React from "react";
import VideoItem from "./VideoItem";


function VideoList (props) {

    //Video properties: 


   return (

        <div className="ui relaxed divided list">
            {props.videos.map((aVideo, index) => {
                   return <VideoItem
                        key={index}
                        id={index}
                        video={aVideo}
                    />
                })
            }
        </div>
    );


}


export default VideoList;