import React from 'react'

export default function Container(props){

    return (<div style={{
        backgroundColor:"rgba(255,255,255, 0.85)",
        flex:1,
        alignSelf:'center',
        alignContent:'center',
        flexDirection:'column',
        width:"90%",
        height:"60%",
        padding:50,
        borderRadius:'25px',
        position:'absolute',
        marginLeft:'50px',
        marginTop:'10%',
        
        

    }}>
    {props.children}
    </div>)

}