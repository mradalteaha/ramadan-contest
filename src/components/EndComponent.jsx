import React  from 'react'
import { Checkmark } from 'react-checkmark'

import './SignUp.css'

export default function WelcomeComponent(props){


    return(<div>
        <h2 style={{textAlign:'right' ,fontWeight:'bold' ,fontSize:"36px" ,padding:"50px"}}> 

        شكرًا لكم على المشاركة في المسابقة، سيتم الإعلان عن النتائج قريبًا. حظًا موفقًا للجميع

 </h2>
 <br></br>
 <br></br>
 <Checkmark size='256px' color='green'/>
 
    </div>)

}


