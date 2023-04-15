import React from 'react'
import './ExamCard.css'

export default function ExamCard(props){
    const {exam,student ,handleSelection}=props
    //we need to get the grade of this exam and it's not null show the grade and change 
    //the border color to green 
    

    return(<div onClick={()=>handleSelection(exam)} className='card'>
        <h1> student Name  {student.fullName}</h1>
    </div>
)
}