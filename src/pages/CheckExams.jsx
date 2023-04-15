import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../context/Context'
import './CheckExams.css'
import {db} from '../firebase'
import {  getDocs ,collection } from "firebase/firestore";
import UsersList from '../components/UsersList';
import {CircularProgress} from '@mui/material'






export default function CheckExams(){
const {adminLog} = useContext(GlobalContext)
const usersRef = collection(db,"users")
const [users,setUsers] = useState(null)



useEffect(() => {
    async function fetchData() {
      const data = await fetcher()
      if(data){
       // console.log(data)
       
        setUsers(data)
      }

    }
    fetchData()
   
  }, []); 

 


  async function fetcher(){
    const data = new Promise(async (resolve,reject)=>{

      try{
 
        const response = await getDocs(usersRef)
        const temp = []
        await Promise.all(response.docs.map(async (user) => {
          
          const phone = user.data().phone
          const quizz = await getDocs(collection(db,`users/${phone}`,'quizz'))
          if(quizz){
            // console.log('quizzes in check exam page')
            let tempValidExams=[]
             quizz.forEach(q => {
               
               if(Object.values(q.data()).filter(answer => answer.length > 0).length >70){
            /*      console.log('printing filtered quizzez')
                 console.log(q.data()) */
                 tempValidExams.push(q.data())
                
               }
   
             })
             if(tempValidExams.length > 0){
              const filteredExams =   tempValidExams.reduce((pre ,curr) => {
                return  Object.values(pre).length > Object.values(curr).length ? pre : curr ; 
               } )

               const finalObject = { user : user.data() , exam : filteredExams}
               
               temp.push(finalObject)

             }

           }
        })).then(res =>{
          resolve(temp)
        });

        

      }
      catch(err){
        reject(err)
      }

    })

    return data
 
     
  }

/* 
  console.log(adminLog)
  console.log(users) */
  
  
  if (users && adminLog){
  //console.log('users loaded')
    return (<UsersList users={users}/>)
  }
  else{

    return(<div  className='container'>
            <h1>جاري تحميل المنتسبين</h1>

        <CircularProgress size={"115px"}  />
    </div>)
  }



}