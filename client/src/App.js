import React from "react";
import SignUp from "./components/SignUp";
import {Container} from 'react-bootstrap';

function App() {
  return (
   <Container className="d-flex align-items-center justify-content-center" style={{minHeight:'100vh'}}>
     <div style={{maxWidth:'400px'}}><SignUp/></div>
    
   </Container>
  );
}

export default App;
