import React from 'react'
import { useEffect, useState } from 'react'

const FetchData = () => {
    const[emojis, setEmoji] = useState([])

    useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/posts')
       .then(res => res.json())
       .then(json => setEmoji(json))
       .catch((err)=> console.log(err))
    }, [emojis])
   
  return (
    <div>
        {
          emojis.map(emoji =>(
            <div> 
                <p>{emoji.title}</p>
            </div>
          ))
        }
    </div>
  )
}

export default FetchData