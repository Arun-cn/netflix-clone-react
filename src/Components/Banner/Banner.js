import React, { useState , useEffect} from 'react';
import '../Banner/Banner.css';
import { API_KEY , Image_url} from '../../Constants/Constans';

import axios from '../../Axios';

export default function Banner() {
  const [movie, setMovie] = useState();
  useEffect(()=>{
    axios.get(`/trending/movie/day?api_key=${API_KEY}`).then((res)=>{
       setMovie(res.data.results[0]);
    });
  },[]);
  return (
    
    <div 
      style={{backgroundImage: `url(${movie ? Image_url+movie.backdrop_path : ''})`}} 
      className='banner'>
        <div className='content'>
          <h1 className='title'>{ movie ? movie.title : ''}</h1>
          <div className='banner_buttons'>
              <button className='button'>play</button>
              <button className='button'>my list</button>
          </div>
          <h1 className='discrition'>{movie ? movie.overview : ""}</h1>
        </div>
        <div className='fade_bottom'></div> 
    </div>
  )
}
