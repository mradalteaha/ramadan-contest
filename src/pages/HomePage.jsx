import React ,{useState} from "react";
import Heading from "../components/common/Heading";
import Footer from "../components/common/Footer";
import WelcomeComponent from "../components/WelcomeComponent";
import Container from "../components/common/Container";
import OpenQuestionCard from "../components/OpenQuestionCard";


function HomePage() {

    const [started , setStarted] = useState(false)
  
  
  
    return (
      <div> 
        <Heading />
        <Container>
        {
        <WelcomeComponent/>}
        </Container>
          
        <Footer />
      </div>
    );
  }
  
  export default HomePage;