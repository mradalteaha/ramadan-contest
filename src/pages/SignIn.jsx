import React, { useContext } from "react"
import './SignIn.css'
import {db} from '../firebase.js'
import { getDoc,doc } from "firebase/firestore";
import GlobalContext from "../context/Context";
import { useNavigate  } from "react-router-dom";

const accRef = doc(db,"Accounts","checkeruser");

function SignIn() {
  const navigate = useNavigate();

 const {setAdminLog} =useContext(GlobalContext)

  async function handleClick(event){
    
    try{

      event.preventDefault();
      let LocalUsername = event.target.username.value
      let LocalPassword = event.target.password.value

      const user = await getDoc(accRef)
      //console.log(user.data())
      const {username, password} = user.data()

      if(username === LocalUsername && password === LocalPassword){
        setAdminLog(true)
        //console.log("succss")

        navigate("/CheckExams");
      }
      else{
        alert ("المعلومات التي ادخلتها خاطئة ")
      }

      

  }catch(e){

      console.error(e)


  }
  }

  return (
    <div className="container">

      <h1>تسجيل الدخول</h1>
      <form className="myform" onSubmit={handleClick} >

        <input
          id='username'
          name="username"
          type="text" placeholder="اسم المستخدم"></input>
        <input
          id='password'
          name="password"
          type="password" placeholder="كلمة السر"></input>


        <br></br>

        <button type="submit">دخول</button>

      </form>

    </div>
  )

}



export default SignIn;