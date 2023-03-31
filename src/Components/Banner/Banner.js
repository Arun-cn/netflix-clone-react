import React from 'react';
import '../Banner/Banner.css';

export default function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
          <h1 className='title'>movie name</h1>
          <div className='banner_buttons'>
              <button className='button'>play</button>
              <button className='button'>my list</button>
          </div>
          <h1 className='discrition'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</h1>
        </div>
        <div className='fade_bottom'></div> 
    </div>
  )
}
