import React from 'react'



export default function UserDoc(props){
    const {user} = props

    const fullName = "morad Teaha"
    const city ="Rahat"
    const phone = "0505555802"
    const Grade= 100

    return <div>
        <h1>{fullName}</h1>
        <h1>{city}</h1>
        <h1>{phone}</h1>
        <h1>{Grade}</h1>
    </div>
}


