import React from 'react'
import {useLocation } from "react-router-dom";
import './StudentExam.css'
import {db} from '../firebase.js';
import { setDoc ,doc, collection,addDoc,updateDoc} from 'firebase/firestore';
import { useState } from 'react';
import {CircularProgress} from '@mui/material'
import { useNavigate } from 'react-router-dom';



export default function StudentExam(props){
    //this page shoud contain the exam it self
    const location = useLocation()
    const navigate = useNavigate();

    const {student,quizz}=location.state
    console.log('printing quizz')
    //console.log(quizz)
    const questionsBank = quizz
    const [currentQuestion,setcurrentQuestion] = useState(0)
    const [prevQuestionVisiability,setPrevQuestionVisiablity] =useState('hidden')
    const [lastQuestion,setLastQuestion]=useState(false)
    const [waitingSubmit,setWaitingSubmit] =useState(false)


    const [score, setScore] = useState(0);

 



    function handleSelection(exam){
        //console.log(exam)

    }


    function nextQuestion(){

        try{

            if(currentQuestion  < questionsBank.length -1 ){
                if(currentQuestion  === questionsBank.length -2){
                    setLastQuestion(true)
    
                }
             
                setPrevQuestionVisiablity('visible')
    

    
                
                setcurrentQuestion(currentQuestion+1)
             /*    console.log('printing the val of the nexe question answer')
                console.log(`question ${questionsBank[currentQuestion+1]}`)
                console.log('answer')
                console.log(quizzAnswers.get(questionsBank[currentQuestion+1])) */

            
                
                
    
            }
            else{
                console.log('triggered last question')
                //console.log(lastQuestion)

                
            }


        }catch(e){
            alert("لقد واجهنا خطأ الرجاء المحاولة مجدداً")
            console.error(e)
        }

    }

    function preVQuestion(){

        try{
            setLastQuestion(false)

            if(currentQuestion -1 === 0){
                setPrevQuestionVisiablity('hidden')
                //console.log(quizzAnswers)
                setcurrentQuestion(currentQuestion-1)

            }else{
               // console.log(quizzAnswers)
                setcurrentQuestion(currentQuestion-1)
            }

        }catch(e){
            console.error(e)
            alert("لقد واجهنا خطأ الرجاء المحاولة مجدداً")
        }
        
    }


    function correctAnswer(){

        setScore(curr=>  curr+1)
        nextQuestion()
        console.log(student)

    }

    function wrongAnswer(){

        setScore(curr=>  curr-1)
        nextQuestion()

       


    }


    
    async function submitQuestion(){
        try{
            
            setWaitingSubmit(true)
            //console.log(currentUser)
    
       

            const userRef = doc(db, "users", student.phone)
            
           updateDoc(userRef, { grade:score }).then(res => {
            console.log('updated successfully ')
           // console.log(res)
            navigate("/CheckExams");

           } )

        }catch(e){
            alert("لقد واجهنا خطأ الرجاء المحاولة مجدداً")
            console.error(e)
        }
    }

    return(<div className='container'>
        <h2>{`العلامة حتى الان ${score}`}</h2>
        <div className='questionContainer'>
        <h1> {`${currentQuestion +1} / ${questionsBank.length +1}`}</h1>

          <h1 style={{fontWeight:'bold'}}>
         
          السؤال:  
          {quizz[currentQuestion].question}
          </h1>  
        </div>
        <div className='answerContainer'>
          <h1>
          الجواب:  
          {quizz[currentQuestion].answer}
          </h1>  
        </div>
        <div className='buttonsAndCheck'>
        {waitingSubmit? <CircularProgress size={"25px"} style={{marginTop:"20%",marginLeft:"3px"}} /> : <div> <button  onClick={lastQuestion ? submitQuestion :nextQuestion}  >{lastQuestion?'انهاء': 'السؤال التالي'}</button> 
   <button  onClick={preVQuestion} style={{visibility:prevQuestionVisiability}} > السؤال السابق</button>
   <button style={{color:'green'}} onClick={correctAnswer}> اجابة صحيحة </button>  
            <button style={{color:'red'}} onClick={wrongAnswer}> اجابة خاطئة </button>         
            
   
   </div> }
            
        </div>
    </div>)

}