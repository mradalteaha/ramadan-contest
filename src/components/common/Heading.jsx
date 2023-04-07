import React from "react";
import HighlightIcon from '@mui/icons-material/Highlight';
import {Link} from 'react-router-dom'



function Heading(){

    return (<header style={{flex:1,FlexDirection:"row",alignContent:"flex-start",alignItems:"flex-start",justifyContent:'left',textAlign:"right"}}>
   
    <nav style={{alignSelf:"center",textAlign:"left" ,flex:1, justifyContent:"center"}}>
        <ul>
            <li>
                <Link to="/signIn">تسجيل الدخول </Link>
            </li>
        </ul>
    </nav>
    <h1 style={{textAlign:"right"}}> <HighlightIcon/>المركز الجماهيري رهط  </h1>
     
    </header>)
}

export default Heading;