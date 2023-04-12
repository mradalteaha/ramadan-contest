import React, { useState } from 'react'
import {useLocation } from "react-router-dom";
import './StudentExam.css'
import ExamCard from '../components/ExamCard';



export default function StudentExam(props){
    const location = useLocation()
    const {student,quizz}=location.state
    const [selectedExam ,setSelectedExam]= useState(null)
    //console.log(student)
    const object =quizz[0].data

    function handleSelection(exam){
        console.log(exam)

    }

  /*   for (const property in object) {
      console.log(`${property}: ${object[property]}`);
    } */
    
    return(<div className='container'>
        {quizz.map((exam, index) => {
            return <ExamCard student={student} handleSelection={handleSelection} exam={exam} key={index} index={index+1}/>
          })}
    </div>)

}