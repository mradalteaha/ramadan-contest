import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../context/Context'
import './CheckExams.css'
import {db} from '../firebase'
import {  getDocs ,collection } from "firebase/firestore";
import UsersList from '../components/UsersList';





export default function CheckExams(){
const {adminLog} = useContext(GlobalContext)
const usersRef = collection(db,"users")
const [users,setUsers] = useState([])


//useEffect(()=>{console.log('admin changed state')},[adminLog])//re render on login



/* useEffect(() => {
    async function fetchData() {
        let temp =[]
      // You can await here
      const response = await getDocs(usersRef)
      response.forEach(d=>{
        let data = d.data()
        //console.log(data)
        temp.push(data)
       
      })
      setUsers(temp)
      // ...
    }
    fetchData();
  }, []);  */




  console.log(adminLog)
  //console.log(users)

  
  if (users.length !==0 && !adminLog){
    return (<UsersList users={users}/>)
  }
  else{

    return(<div className='container'>
        <h1>you can't access this page</h1>
    </div>)
  }



}