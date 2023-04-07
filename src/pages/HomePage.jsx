import React ,{useState} from "react";
import Heading from "../components/common/Heading";
import Footer from "../components/common/Footer";
import WelcomeComponent from "../components/WelcomeComponent";
import Container from "../components/common/Container";
import OpenQuestionCard from "../components/OpenQuestionCard";


function HomePage() {

    const [started , setStarted] = useState(false)
  
  
    function startQuizz(start){
      console.log(start)
      setStarted(start)
    }
    return (
      <div> 
        <Heading />
        <Container>
        {started ? 
          <OpenQuestionCard/>
        :
        <WelcomeComponent startQuizz={startQuizz}/>}
        </Container>
          
        <Footer />
      </div>
    );
  }
  
  export default HomePage;