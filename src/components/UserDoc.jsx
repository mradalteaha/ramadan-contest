import React from 'react'
import './UserDoc.css'
import { useNavigate  } from "react-router-dom";
import {db} from '../firebase'
import {  getDocs ,collection } from "firebase/firestore";


export default function UserDoc(props){
    const {user} = props
    console.log('user insidde userdoc')
    const {fullName,city,phone} = user.user
    const Grade= 100
    const usersQuizzRef = collection(db,`users/${phone}`,'quizz')
    console.log(user.user)
    const navigate = useNavigate();

    async function fetchData() {
        try{
            const temp =[]
            // You can await here
            const response = await getDocs(usersQuizzRef)
            response.forEach(d=>{
              let data = d.data()
             let id =  d.id
              let ob={id ,data}
              //console.log(data)
              temp.push(ob)
             
            })

            return temp


        }catch(e){
            console.log(e)
        }
    }
    

    async function handleClick(){
     
            fetchData().then(exams =>{
                console.log('hehe')
                navigate("/StudentExam",{
                    state:{student:user ,quizz:exams}
                });
            }).catch(e=>{
                console.log(e)
            });
       
 
    }

    return <div onClick={handleClick} className='card'>
        <h1 className='name'>الاسم: {fullName}</h1>
        <h1 className='city'>{city} :المدينة</h1>
        <h1 className='phone'>{phone} : رقم الهاتف</h1>
        <h1 className='grade'>{Grade} : العلامة</h1>
    </div>
}


