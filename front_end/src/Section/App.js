import React from "react";
import { IsloginContextProvider } from '../Context/IsloginContext'
import { BrowserRouter as Router, } from 'react-router-dom';
import { MainPage } from '../Pages'
function App() {
  return (
    <IsloginContextProvider>
      <Router>
        <MainPage />
      </Router>
    </IsloginContextProvider>
  );
}

export default App;
