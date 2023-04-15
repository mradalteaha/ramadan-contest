import React from 'react'
import './UserDoc.css'
import { useNavigate  } from "react-router-dom";


export default function UserDoc(props){
    const {user} = props
   // console.log('user insidde userdoc')
    const {fullName,city,phone} = user.user
    const Grade= user.user.grade ? user.user.grade : undefined
  //  console.log(user.user)
    const navigate = useNavigate();


    async function handleClick(){
        const examArray=[]
        for (const [key, value] of Object.entries(user.exam)) {
            let ob={question:key ,answer:value}
            //console.log(`${key}: ${value}`);
            examArray.push(ob)
        }
    /*     console.log('hehe')
        console.log(examArray) */
     
        
        navigate("/StudentExam",{
            state:{student:user.user ,quizz:examArray}
        });
    }

    return <div onClick={handleClick} className='card' style={{borderColor :user.user.grade ? 'green' : 'rgba(231, 220, 122, 0.8)'}}>
        <h1 className='name'>الاسم: {fullName}</h1>
        <h1 className='city'>{city} :المدينة</h1>
        <h1 className='phone'>{phone} : رقم الهاتف</h1>
        <h1 className='grade'>{Grade} : العلامة</h1>
    </div>
}


