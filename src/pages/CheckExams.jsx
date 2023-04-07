import React, { useContext, useEffect } from 'react'
import GlobalContext from '../context/Context'



export default function CheckExams(){
const {adminLog} = useContext(GlobalContext)

useEffect(()=>{console.log('admin changed state')},[adminLog])

    return(adminLog ? <div className='container'>
        <h1>Hello from Check CheckExams</h1>
    </div>:<div className='container'>
        <h1>you can't access this page</h1>
    </div>)

}