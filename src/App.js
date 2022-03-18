import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import debounce from "debounce";
import TrackList from "./TrackList";
import { API_KEY, API_ROOT } from "./constants";


export default function App() {
  const [tracks, setTracks] = useState([]);
  const [searchText, setSearchText] = useState("");

  // useEffect;

  const handleChange = debounce((e) => {
    console.log(e.target.value);
    setSearchText(e.target.value);
  }, 250);

  useEffect(() => {
    const fetchTrack = async () => {
        let response = await axios({
          method: "get",
          url: API_ROOT,
          params: {
            method: "track.search",
            track: searchText,
            api_key: API_KEY,
            format: "json",
            limit: 15
          }
        });
        console.log(response);
        if(Object.keys(response.data).length > 0) {
          setTracks(response.data.results.trackmatches.track)
        }
    };
    fetchTrack();
  }, [searchText]);
  return (
    <div className="App">
      <input type="text" onChange={handleChange} placeholder="search" />
      {tracks.length > 0 && <TrackList tracks={tracks}/>}
    </div>
  );
}
