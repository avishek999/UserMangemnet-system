import React from 'react'
import UserList from '../components/UserList'

const User = () => {
  const USER = [
    {
    id: 'u1',
    name:'Ros Switcersman',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s',
    places:'3'    
  }
  
]
  return (
    <div>
    <UserList items = {USER}/>
    </div>
  )
}

export default User
