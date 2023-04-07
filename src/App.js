import React ,{useState} from "react";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import CheckExams from "./pages/CheckExams";
import { Routes,Route } from "react-router-dom";

function App() {

  const [started , setStarted] = useState(false)


  function startQuizz(start){
    console.log(start)
    setStarted(start)
  }
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/SignIn" element={<SignIn/>}/>
      <Route path="/CheckExams" element={<CheckExams/>}/>


    </Routes>
  );
}

export default App;
