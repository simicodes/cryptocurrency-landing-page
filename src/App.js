import React, { useEffect } from "react";

//import aos
import Aos from "aos";
import "aos/dist/aos.css";

//import components
import Hero from "./components/Hero";
import Headers from "./components/Headers";
const App = () => {
  //aos initialization
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });

  return (
    <div clasName="overflow-hidden">
      <Headers/>
      <Hero />
    </div>
  );
};

export default App;
