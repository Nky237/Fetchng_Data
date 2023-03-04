import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Async = () => {
    const [posts, setPost] = useState([])
    useEffect(()=>{
        const myData = async()=>{
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
            setPost(data)
        }
    myData()
    })
  return (
    <div>
        <table className='table'>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>  
            <tbody>
                    {
                        posts.map(post =>(
                            <tr>
                                <td>{post.username}</td>
                                <td>{post.name}</td>
                                <td>{post.email}</td>
                                <td>Edit</td>
                                <td>Delete</td>
                            </tr>
                        ))
                    }    
            </tbody>  
        </table> 
    </div>
  )
}

export default Async

