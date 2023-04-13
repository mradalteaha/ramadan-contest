import React, { useEffect, useState } from 'react'
import {useLocation } from "react-router-dom";
import './StudentExam.css'
import ExamCard from '../components/ExamCard';



export default function StudentExam(props){
    const location = useLocation()
    const {student,quizz}=location.state
    const [selectedExam ,setSelectedExam]= useState(null)
    //console.log(student)
    const object =quizz[0].data
    const filtered = quizz.filter(e =>{
        if(e.data ){
            const test = Object.values(e.data).filter(x=> x.length >0).length
            console.log(test)
            
            if(test > 70){
                return e
            }
        
        }
     
    })

  

    function handleSelection(exam){
        console.log(exam)

    }

  /*   for (const property in object) {
      console.log(`${property}: ${object[property]}`);
    } */
    
    return(<div className='container'>
        {filtered.map((exam, index) => {
            return <ExamCard student={student} handleSelection={handleSelection} exam={exam} key={index} index={index+1}/>
          })}
    </div>)

}