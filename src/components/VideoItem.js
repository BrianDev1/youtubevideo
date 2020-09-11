import React from "react";
import "./VideoItem.css";


function VideoItem (props) {



    return(

        <div className="item">
        <img className="ui image" alt="youtube - thumbnail" src={props.video.snippet.thumbnails.medium.url}></img>
        <div className="content">
           <div className="header">{(props.video.snippet.title).substring(0, 50)}...</div> 
        </div>
            
        </div>
    );
}

export default VideoItem;