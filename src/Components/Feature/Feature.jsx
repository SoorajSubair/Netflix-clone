import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import {imageUrl} from '../../Constants/constants'
import axios from '../../axios'
import './feature.css'

function Feature(props) {
    const [movie, setMovie] = useState()
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
          console.log("check")
            setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length)])
        })
    },[props.url])
  const handleGenre = (genre)=>{
    if(genre === 'action'){
      props.onChange('28')
    }else if(genre === 'comedy'){
      props.onChange('35')
    }else if(genre === 'horror'){
      props.onChange('27')
    }else if(genre === 'romantic'){
      props.onChange('10749')
    }else if(genre === 'documentary'){
      props.onChange('99')
    }else if(genre === 'fantasy'){
      props.onChange('14')
    }else if(genre === 'animation'){
      props.onChange('16')
    }else if(genre === 'war'){
      props.onChange('10752')
    }else if(genre === 'family'){
      props.onChange('10751')
    }
  }
  return (
    <div className="featured">
      {props.type && (
        <div className="category">
          <span>{props.type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre" onChange={event => handleGenre(event.target.value)}>
            <option disabled="disabled">Genre</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="war">War</option>
            <option value="fantasy">Fantasy</option>
            <option value="family">Family</option>
            <option value="horror">Horror</option>
            <option value="romantic">Romance</option>
            <option value="animation">Animation</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src={movie ? imageUrl+movie.backdrop_path : ""}
        alt="Featured Movie"
      />
      <div className="info">
      {movie ? <h1 className='title'>{movie.title ? movie.title : movie.original_title}</h1> : <h1>:</h1>}
        <span className="desc">{movie ? movie.overview : ''}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Feature
