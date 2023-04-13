import React from 'react'
import UserDoc from './UserDoc'
import '../components/UserList.css'
import { useState } from 'react'


export default function UsersList(props){
    const {users} = props
    //console.log(users)
    const[currentUsers,setCurrentUsers]=useState(0)
    console.log('user List')
    
    function nextPage(){
      setCurrentUsers(curr=> curr+1)

    }
//
    function prevPage(){
      setCurrentUsers(curr=> curr-1)

        }
        
    return <div className='container'>
    {users.slice(12*currentUsers,(12*currentUsers +12) < users.length-1 ? 12*currentUsers +12 : users.length).map((user, index) => {
            return <UserDoc user={user} key={user.phone}/>
          })}

          <div>
            <button  onClick={nextPage} >الصفحة التالية </button>  <button style={{display:currentUsers===0?'none':''}} onClick={prevPage}>الصفحة السابقة</button>
          </div>
    
    </div>
}