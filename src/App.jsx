/* eslint-disable */ 
import { useState } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer"; 

function App() {
  const [menu, setMenu] = useState("home");

  return(  
    <>
      <Navbar setMenu = {setMenu}/>

      <main className="container my-4">
        <Content menu = {menu}/>
      </main>

      <Footer/>
    </>
  );
}

export default App;