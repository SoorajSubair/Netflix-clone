
import './home.css'
import Navbar from "../Components/Navbar/Navbar";
import Feature from '../Components/Feature/Feature';
import List from '../Components/List/List';
import {originals,action,trending,comedy,romantic,documentary,horror,war,family,fantasy,animation} from '../urls'
import Footer from '../Components/Footer/Footer';
import { API_KEY } from "../Constants/constants";
import { useState } from 'react';
function Home() {
  const [showType,setShowType] = useState("")
  const [genre, setGenre] = useState("")
  const [genreTitle, setGenreTitle] = useState("")
  const [genreFilter, setGenreFilter] = useState(false)
  return (
    <div className='home'>
      <Navbar onClick ={value=>{
        if(value === 'home'){
          setGenreFilter(false)
          setShowType('')
        }else{
          setShowType(value)

        }
        }}/>
      {genreFilter ? <Feature onChange = {value=>{
          setGenre(value);
          setGenreFilter(true);
          if(value === '28'){
            setGenreTitle("Action Movies")
          }else if(value === '35'){
            setGenreTitle("Comedy Movies")
          }else if(value === '27'){
            setGenreTitle("Horror Movies")
          }else if(value === '10749'){
            setGenreTitle("Romatic Movies")
          }else if(value === '99'){
            setGenreTitle("Documentary Movies")
          }else if(value === '14'){
            setGenreTitle("Fantasy Movies")
          }else if(value === '16'){
            setGenreTitle("Animation Movies")
          }else if(value === '10752'){
            setGenreTitle("War Movies")
          }else if(value === '10751'){
            setGenreTitle("Family Movies")
          }
        }}
        url={`discover/movie?api_key=${API_KEY}&language=en-US&include_video=true&page=1&with_genres=${genre}&with_watch_monetization_types=flatrate`} type = {showType}/>:
      <Feature onChange = {value=>{setGenre(value);setGenreFilter(true)}} url={trending} type = {showType}/>
      }
      {genreFilter ? <List url={`discover/movie?api_key=${API_KEY}&language=en-US&include_video=true&page=1&with_genres=${genre}&with_watch_monetization_types=flatrate`} title={genreTitle} isLarge/> : 
      <>
      <List url={originals} title="Netflix Originals" isLarge/>
      <List url={trending} title="Trending Now"/>
      <List url={comedy} title="Comedy Movies"/>
      <List url={action} title="Action Movies"/>
      <List url={animation} title="Animation Movies"/>
      <List url={horror} title="Horror Movies"/>
      <List url={romantic} title="Romantic Movies"/>
      <List url={documentary} title="Documentary Movies"/>
      <List url={war} title="War Movies"/>
      <List url={family} title="Family Movies"/>
      <List url={fantasy} title="Fantasy Movies"/>
      </>
      }
      <Footer/>
    </div>
  )
}

export default Home
