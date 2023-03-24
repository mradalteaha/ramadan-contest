import React, { useState } from "react";
import Context from "./Context";

export default function ContextWrapper(props) {

  const [currentUser, setCurrentUser] = useState(null);
  const [quizzAnswers, setQuizzAnswers] = useState([]);

 

  return (
    <Context.Provider
      value={{ currentUser,setCurrentUser,quizzAnswers, setQuizzAnswers}}
    >
      {props.children}
    </Context.Provider>
  );
}
