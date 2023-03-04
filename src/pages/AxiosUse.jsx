import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AxiosUse = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setData(res.data)
        setLoading(true)
      })
      .catch(err => setError(err))
      // .finally(() => {
      //   setLoading(true)
      // })
  }, [])

  const addData = async (e) => {
    e.preventDefault();
    const newData = {
      name: name,
      username: username,
      email: email,
    };
    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/users',
        newData
      );
      setData((prevData) => [...prevData, response.data]); // add new data to the state
      setName(''); // clear the input field
      setUsername('');
      setEmail('');
    } catch (error) {
      console.error(error);
    }
  };
  

  const deleteData = (id) => {
    const deletedInfo = data.filter(myData => myData.id !== id)
    setData(deletedInfo)
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
  }

  return (
    <div>
      <form action="" style={{ display: 'flex', flexDirection: 'column', width: '400px' }}>
        <input
          type="text"
          placeholder='name'
          onChange={(e) => setName(e.target.value)}
          name={name}
          value={name}
        />
        <input
          type="text"
          placeholder='Enter username'
          onChange={(e) => setUsername(e.target.value)}
          name={username}
          value={username}
        />
        <input
          type="text"
          placeholder='email'
          name={email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={addData}>Add</button>
      </form>
      {
        loading ? data.map(datas => (
          <div
            style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center' }}
            key={datas.id}
          >
            <p>{datas.name}</p>
            <p>{datas.username}</p>
            <p>{datas.email}</p>
            <button onClick={() => deleteData(datas.id)}>Delete</button>
          </div>
        ))
          :
          <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            
        }
        
        
        </div>
        )
        }
        
        export default AxiosUse
