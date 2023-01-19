import "./listItem.css";
// import {PlayArrow} from "@mui/icons-material";
import { useState } from "react";
import YouTube from "react-youtube";
import axios from "../../axios";
import {API_KEY} from '../../Constants/constants'
// import axios from "../../axios";

export default function ListItem(props) {
  const [urlId, setUrlId] = useState("")
  const [isHovered, setIsHovered] = useState(false);
  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
  const opts = {
    height:'100%',
    width:'100%',
    playerVars:{
       // https://developers.google.com/youtube/player_parameters
      origin: 'http://localhost:3000', 
      autoPlay:1,
    },
  };
  const handleMovie = (id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!== 0){
        setUrlId(response.data.results[0])
      }
    })
  }
  return (
   
    <div
      className={props.isLarge ? "listItem-large" : "listItem"}
      // style={{ left: isHovered && index * 290 - 50 + index * 5 }}
      onMouseEnter={() => {setIsHovered(true);handleMovie(props.id)}}
      onMouseLeave={() => setIsHovered(false)}
    > 
      <img src={props.poster} alt="movie poster" />
    
      {isHovered && (
        <>
          { urlId && <YouTube className="videoPop" videoId={urlId.key} opts={opts} onReady={onPlayerReady}/>}
          {/* <video src={`${youtube+urlId.Id}`} autoPlay={true} muted={false}  /> */}
          {/* <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
            </div>
          </div> */}
          </>
       )}
    </div>
  );
}