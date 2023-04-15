import React  from "react";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import CheckExams from "./pages/CheckExams";
import StudentExam from "./pages/StudentExam";
import { Routes,Route } from "react-router-dom";

function App() {


  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/SignIn" element={<SignIn/>}/>
      <Route path="/CheckExams" element={<CheckExams/>}/>
      <Route path="/StudentExam" element={<StudentExam/>}/>


    </Routes>
  );
}

export default App;
