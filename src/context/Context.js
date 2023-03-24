import React from "react";

const GlobalContext = React.createContext({
  currentUser:null,
  setCurrentUser:()=>{},
  quizzAnswers:null,
  setQuizzAnswers:()=>{}
});

export default GlobalContext;