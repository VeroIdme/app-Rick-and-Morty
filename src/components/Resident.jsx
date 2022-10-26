import React from 'react'
import usePromise from '../myHooks/usePromise'
import '../styles/resident.css'

const Resident = ({URL}) => {
    const myResident = usePromise(URL)
  return (
    <div className='container-resident'>
        <div className='container-image'><img src={`${myResident?.image}`}/></div>
        <div className='container-info-resident'>
        <h1 className='name-resident'>{`${myResident?.name.toUpperCase()}`}</h1>
        <ul className='list-info-resident'>
            <li className={`item-status-res ${myResident?.status.toLowerCase()}`}>{`${myResident?.status.toUpperCase()}`}</li>
            <li className='item-origin-res info-res'>{`ORIGIN ${myResident?.origin.name}`}</li>
            <li className='item-episode-res info-res'>{`EPISODES WHERE APPEAR ${myResident?.episode.length}`}</li>
        </ul>
        </div>
        
    </div>
  )
}

export default Resident