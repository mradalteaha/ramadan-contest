import React from 'react'
import UserDoc from './UserDoc'
import '../components/UserList.css'
import { useState } from 'react'
import { useEffect } from 'react'


export default function UsersList(props){
    const {users} = props
  
    const[currentUsers,setCurrentUsers]=useState(0)
  
    function nextPage(){
      setCurrentUsers(curr=> curr+1)

    }

    
//
    function prevPage(){
      setCurrentUsers(curr=> curr-1)

        }
        
    return <div className='container'>
    {users.slice(12*currentUsers,(12*currentUsers +12) < users.length-1 ? 12*currentUsers +12 : users.length).map((user, index) => {
            return <UserDoc user={user} key={user.user.phone}/>
          })}

          <div style={{alignSelf:'center',backgroundColor:'blue'}}>
            <button  onClick={nextPage} >الصفحة التالية </button>  <button style={{display:currentUsers===0?'none':''}} onClick={prevPage}>الصفحة السابقة</button>
          </div>
    
    </div>
}