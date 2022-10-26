import React from 'react'
import usePromise from '../myHooks/usePromise'
import '../App.css'

const Filter = ({value, setSubmit}) => {
    let listFiltered
    if(value){
        let URL = `https://rickandmortyapi.com/api/location?name=${value}`
        listFiltered = usePromise(URL, value)
    } else{
        listFiltered = null
    }

    const handleClick = name => {
        setSubmit(name)
        value = null
        document.getElementById('items-resi').style.display = 'none'
    }
    
  return (
    <div className='container-list-filter' id='items-resi'>
        <ul className='list-filter'>
            {
                listFiltered?.results.map( location => (
                    
                    <label for='hide'><li  className='item-filter' key={location.id} onClick={() => handleClick(location.name)}>{location.name}</li></label>
                    
                ))
            }
        </ul>
    </div>
  )
}

export default Filter