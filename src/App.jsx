import { useState } from "react";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import Footer from "./Components/Footer";

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