import React from 'react'
import "./Series.css"
const SeriesCard = ({data}) => {
    const {name,id,img_url,rating,description,watch_url, cast,genre}=data;
  return (
    <div className="movie-card">
    <li>
    <div className='image-setion'>
      <img src={img_url} alt="" style={{width:"100%", height:"100%"}} />
    </div>
    <h2>Name:{name}</h2>
    <h3>Rating:{rating}</h3>
    <p>Summary:{description}</p>
    <p>Genre:{genre}</p>
<p>Cast:{cast}</p>
       <a href={watch_url} target='_blank'> 
         <button>Watch now</button>
         </a> 
     
  </li>
  </div>
  )
}

export default SeriesCard
