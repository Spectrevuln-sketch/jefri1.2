import React from 'react'
import { MainApp } from '../Pages'
import { BrowserRouter as Router, } from 'react-router-dom';
import { IsloginContextProvider } from '../Context/isLoginContext';
import axios from 'axios';

/* Axios Instance */
axios.defaults.withCredentials = true;
/* End Axios Instance */
function App() {
  return (
    <IsloginContextProvider>
      <Router>
        <MainApp />
      </Router>
    </IsloginContextProvider>
  );
}

export default App;
