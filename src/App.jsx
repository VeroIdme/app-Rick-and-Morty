import './App.css'
import { useState } from 'react'
import Location from './components/Location'
import Filter from './components/Filter'
function App() {
  const [submit, setSubmit] = useState('')
  const [text, setText] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    setSubmit(e.target.location.value)
  }

  const handleText = e => {
    setText(e.target.value)
    document.getElementById('items-resi').style.display = 'block'
  }
  console.log(submit)
  return (
    <div className="App">
      <div className='headerImg'>
        <img className='imgLogo' src='/images/portal.png'/>
      </div>
      <h1 className='titleMain'><img src='/images/Rick_and_Morty_logo.png'/></h1>
      <form  className='form' onSubmit={handleSubmit}>
        <input className='inputTextSearch' type='text' placeholder='Search your location' id='location' onChange={handleText}/>
        <button className='btnSearch'><img src='/images/lupa.png' /></button>
        <Filter value={text} setSubmit={setSubmit} />
      </form>
      <Location change={submit} />
    </div>
  )
}

export default App
