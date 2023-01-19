import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import { useRef,useState,useEffect } from 'react'
import ListItem from '../ListItem/ListItem'
import {imageUrl} from '../../Constants/constants'
import axios from "../../axios";
import './list.css'

function List(props) {
  const [movies, setMovies] = useState([])
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      if(props.isLarge){
        setMovies(response.data.results.slice(0,15))
      }else{
        setMovies(response.data.results.slice(2))
      }
      
    },[])
  })
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();
  
  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      console.log(slideNumber)
      props.isLarge ? listRef.current.style.transform = `translateX(${585 + distance}px)` : listRef.current.style.transform = `translateX(${290 + distance}px)`
    }
    if (direction === "right" && slideNumber < 12) {
      setSlideNumber(slideNumber + 1);
      console.log(slideNumber)
      props.isLarge ? listRef.current.style.transform = `translateX(${-585 + distance}px)` : listRef.current.style.transform = `translateX(${-290 + distance}px)`
    }
  };

  return (
    <div className="list">
      <span className="listTitle">{props.title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          {movies.map((obj)=>  
              <ListItem id={obj.id} poster={imageUrl+obj.backdrop_path} isLarge={props.isLarge}/>
          )}
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
)}

export default List
