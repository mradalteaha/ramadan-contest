import React from 'react'
import './UserDoc.css'


export default function UserDoc(props){
    const {user} = props
    const {fullName,city,phone} = user
    const Grade= 100

    return <div className='card'>
        <h1 className='h1'>{fullName} :الاسم</h1>
        <h1 className='h1'>{city} :المدينة</h1>
        <h1 className='h1'>{phone}:رقم الهاتف</h1>
        <h1 className='h1'>{Grade}:العلامة</h1>
    </div>
}


