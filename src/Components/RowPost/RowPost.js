import React ,{useEffect,useState}from 'react';
import '../RowPost/RowPost.css';
import axios from '../../Axios' ;
import { Image_url } from '../../Constants/Constans';

export default function RowPost(props) {
const [movies, setMovie] = useState([]);
useEffect(()=>{
  axios.get(props.url).then((res)=>{
     setMovie(res.data.results);
  });
},[]);
  return (
    <div className='row'>
        <h3 className='title'>{props.title}</h3>
        <div className='posters'>
          {movies.map((obj)=>{
           return (<img className={props.isSmall ? "min_posters" : 'poster'} alt='poster'src={obj ? Image_url+obj.backdrop_path : ''}></img> )
          })} 
            </div>

    </div>
  )
}
