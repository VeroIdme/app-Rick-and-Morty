import React from 'react'

const Pagination = ({items}) => {
  return (
    <div>
        <ul className='list-residents'>
            {items}
        </ul>
        <button onClick={handlePre}>Previus</button>
        <h3>{current}</h3>
        <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default Pagination