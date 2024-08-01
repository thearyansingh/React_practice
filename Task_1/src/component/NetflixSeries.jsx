import React from 'react'
import seriesList from '../api/seriesList.json'
import SeriesCard from './SeriesCard'
import './Series.css'
const NetflixSeries = () => {
  return (
    <div className='container'>
      <h1 className='title'>watch exciting movies and show</h1>
    <ul className='grid grid-two-cols'>
      
       { seriesList.map((curElm)=>(
      <SeriesCard key={curElm.id} data={curElm} />
      ))
    }
    </ul>
    </div>
  )
}

export default NetflixSeries
