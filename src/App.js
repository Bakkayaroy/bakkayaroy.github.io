import React from 'react';
import './App.css';
import InfoCard from "./Components/InfoCard";
import Experience from "./Components/Experience"
import Comments from  "./Components/Comments"
import './Components/Menu.css';
import Skills from "./Components/Skills";

function App() {

    return (
      <div className="resume_head">
          <InfoCard></InfoCard>
          <Skills></Skills>
          <Experience></Experience>
          <Comments></Comments>
      </div>
  );
}
export default App;
