import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

const App = ()=>{
  return(
    <React.Fragment>
    <Navbar />
    <Card />
    <Footer/>
    </React.Fragment>
  )
}

export default App;