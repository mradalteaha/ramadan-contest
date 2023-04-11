import React from 'react'
import UserDoc from './UserDoc'
import '../components/UserList.css'
import { useState } from 'react'


export default function UsersList(props){
    const {users} = props
    console.log(users)
    const[currentUsers,setCurrentUsers]=useState(0)
    


    return <div className='container'>
    {users.slice(12*currentUsers,(12*currentUsers +12) < users.length-1 ? 12*currentUsers +12 : users.length).map((user, index) => {
            return <UserDoc user={user} key={user.phone}/>
          })}
    
    </div>
}