import React, {useState} from 'react';
import '../App.css';
import SearchBar from "./SearchBar";
import Youtube from "../apis/youtube";
import VideoList from "./VideoList";


const KEY = "AIzaSyD-PBZlLvF_7xtI5rfoFFAUPpPwEKU5tco";

function App() {

  const [videos, setVideos] = useState([]);

    async function onSearchSubmit(searchText) {    //Using the youtube API
      console.log('here is the search item ' + searchText);
     const response = await Youtube.get('/search', {
        params: {
          q: searchText,
          part: "snippet",
          maxResults: 5,
          key: KEY
        }
      });

     setVideos(response.data.items);
    };


  return (
    <div className="ui container">
       <h1>this is app</h1>
       <SearchBar onSubmit={onSearchSubmit}/>
       <VideoList videos={videos}></VideoList>
    </div>
  );
}

export default App;
