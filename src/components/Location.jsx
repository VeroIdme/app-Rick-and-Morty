import React from 'react'
import usePromise from '../myHooks/usePromise'
import getRandomNumber from '../utils/getRandomNumber'
import Resident from './Resident'
import '../styles/location.css'

const Location = ({change}) => {

    let actualLocation = null
    if(change){
        const myUrl = `https://rickandmortyapi.com/api/location?name=${change}`
        actualLocation = usePromise(myUrl, change).results


        return (
            <div className='container-principal-Location'>
                <div className='container-info'>
                <h1 className='title-name-loc'>{`${actualLocation?.[0].name.toUpperCase()}`}</h1>
                <ul className='list-features-loc'>
                    <li className='item-type-loc'>{`TYPE: ${actualLocation?.[0].type.toUpperCase()}`}</li>
                    <li className='item-dimension-loc'>{`DIMENSION: ${actualLocation?.[0].dimension.toUpperCase()}`}</li>
                    <li className='item-population-loc'>{`POPULATION: ${actualLocation?.[0].residents.length}`}</li>
                </ul>
                </div>
                <div className='container-res'>
                <h2 className='title-residents'>RESIDENTS</h2>
                <ul className='list-residents'>
                    {
                        actualLocation?.[0].residents.map((resident) => (
                            <li className='item-resident' key={resident} ><Resident URL={resident}/></li>
                        ))
                    }
        
                </ul>
                </div>
            </div>
          )
    } else {
        const id = getRandomNumber()
        const myUrl = `https://rickandmortyapi.com/api/location/${id}`
        actualLocation = usePromise(myUrl)
        return (
            <div className='container-principal-Location'>
                <div className='container-info'>
                <h1 className='title-name-loc'>{`${actualLocation?.name.toUpperCase()}`}</h1>
                <ul className='list-features-loc'>
                    <li className='item-type-loc'>{`TYPE: ${actualLocation?.type.toUpperCase()}`}</li>
                    <li className='item-dimension-loc'>{`DIMENSION: ${actualLocation?.dimension.toUpperCase()}`}</li>
                    <li className='item-population-loc'>{`POPULATION: ${actualLocation?.residents.length}`}</li>
                </ul>
                </div>
                <div className='container-res'>
                <h2 className='title-residents'>RESIDENTS</h2>
                <ul className='list-residents'>
                    {
                        actualLocation?.residents.map((resident) => (
                            <li className='item-resident' key={resident} ><Resident URL={resident}/></li>
                        ))
                    }
        
                </ul>
                </div>
            </div>
          )
    }
    
    

  
}

export default Location