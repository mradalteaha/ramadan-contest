import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../context/Context'
import './CheckExams.css'
import {db} from '../firebase'
import {  getDocs ,collection } from "firebase/firestore";
import UsersList from '../components/UsersList';





export default function CheckExams(){
const {adminLog} = useContext(GlobalContext)
const usersRef = collection(db,"users")
const [users,setUsers] = useState(null)
const [loaded ,setLoaded] = useState(false)

//useEffect(()=>{console.log('admin changed state')},[adminLog])//re render on login



useEffect(() => {
    async function fetchData() {
      const data = await fetcher()
      if(data){
       // console.log(data)
       
        setUsers(data)
        setLoaded(true)
      }

    }
    fetchData()
   
  }, [loaded]); 

  useEffect(()=>{console.log('refreshed after loading')
  console.log("users")

  console.log(users)
  console.log("users")

},[users])


  async function fetcher(){
    const data = new Promise(async (resolve,reject)=>{

      try{

        let temp =[]
        // You can await here
        const response = await getDocs(usersRef)
        let i=0
        response.forEach(async (d)=>{
          let data = d.data()
          const quizz = await getDocs(collection(db,`users/${data.phone}`,'quizz'))
          let tempValidExams = []
          if(quizz){
           // console.log('quizzes in check exam page')
           
            quizz.forEach(q => {
              
              if(Object.values(q.data()).filter(answer => answer.length > 0).length >70){
           /*      console.log('printing filtered quizzez')
                console.log(q.data()) */
                tempValidExams.push(q.data())
                i+=1
              }
            })
          }
    
          if(tempValidExams.length > 0 ){
            const filteredExams =   tempValidExams.reduce((pre ,curr) => {
             return  Object.values(pre).length > Object.values(curr).length ? pre : curr ; 
            } )
    
         /*    console.log(`number of valid exams for `,d.data().phone )
            console.log(filteredExams)
    */
            let finalObject = { user : d.data() , exam : filteredExams} 
            
            temp.push(finalObject)
        /*     console.log('i got valid user and im pushing')
            console.log(temp.length) */
    
          }
    
         /*  console.log('filtered quizzez ammount')
          console.log(i) */
           
        })
      /*   console.log('printing number of valid users')
        console.log(temp.length) */
        resolve(temp)
        

      }
      catch(err){
        reject(err)
      }

    })

    return data
 
     
  }


  console.log(adminLog)
  console.log(users)
  
  
  if (users && !adminLog){
  console.log('users loaded')
    return (<UsersList users={users}/>)
  }
  else{

    return(<div className='container'>
        <h1>you can't access this page</h1>
    </div>)
  }



}