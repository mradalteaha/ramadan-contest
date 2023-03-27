import React ,{useContext} from 'react'
import './SignUp.css'
import GlobalContext from '../context/Context';

export default function WelcomeComponent(props){


    const {setCurrentUser} = useContext(GlobalContext)

    function handleClick(event){ //getting the element out of the form 

        try{

            event.preventDefault();
    
            let Account = {
                fullName:document.getElementById("fullName").value
                ,phone : document.getElementById("phone").value
                ,city:document.getElementById("city").value
            }

            if(Account.fullName ==='' ||Account.phone ==='' ||Account.city ==='' ){
                alert("يجب ادخال بيانات صحيحة ")
            }else{
                console.log(Account)
                setCurrentUser(Account)
        
               props.startQuizz(true);
            }
    
            

        }catch(e){

            console.error(e)


        }
        
     
       


    }

    return(<div>
        <h2 style={{textAlign:'right' ,fontWeight:'bold'}}> المسابقة الرمضانية الكبرى – رهط
شارك وأربح 
عزيزي المشارك: 
نضع بين أيديك مسابقة رمضان الكبرى، لدخول القرعة، يجب عليك الإجابة على جميع الأجوبة بشكل صحيح. 

سيتم تصليح الأسئلة من قبل لجنة مختصة، ومن من يجيب عن جميع الأسئلة بشكل صحيح سيدخل القرعة وقد يحالفه الحظ ليكون ضمن 10 فائزين سيفوزون بجوائز قيمة جدا. 
ستجري القرعة في بث حي ومباشر على صفحة المركز الجماهيري رهط على الفيسبوك.
آخر موعد للمشاركة في المسابقة 13/4/2023 
 </h2>
 <br></br>
 <br></br>
 <form onSubmit = {handleClick } >
        <input 
             id='fullName'
             name= "fullName"
            type="text" placeholder="الاسم الكامل" autoComplete='off' ></input>
            <input 
             id='phone'
             name= "phone"
            type="number" placeholder="رقم الهاتف" autoComplete='off' ></input>
            <input 
             id='city'
             name= "city"
            type="text" placeholder="البلد" autoComplete='off' ></input>
          
     
          
          <br></br>
            
        <button type="submit">بدأ المسابقة </button>

        </form>
    </div>)

}


