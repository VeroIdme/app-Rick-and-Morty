import {useState, useEffect} from 'react'
import axios from 'axios'


const usePromise = (URL, change) => {
    const [state, setState] = useState()
    const myUrl = URL
    useEffect( () => {
        axios.get(myUrl)   
            .then(res => setState(res.data))
            .catch(err => console.log(err))
    }, [change])
     
  return state
}

export default usePromise