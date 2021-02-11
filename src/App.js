import React from 'react';

import {BrowserRouter as Router, Route, Switch  } from "react-router-dom";

import './App.css';
import StudentlistComponents from './components/StudentlistComponents';
import HeaderComponent from './components/HeaderComponent';
import FooterComponents from './components/FooterComponents';
import createStudentComponent from './components/createStudentComponent';
import updateStudentComponent from './components/updateStudentComponent';
import ViewStudentComponent from './components/ViewStudentComponent';
import loginComponent from './components/loginComponent';



function App (){
 return (
  
    <div>
      <Router>
          <HeaderComponent/>
    
          <div className="container">
            <Switch> 
              <Route path="/" exact component={loginComponent}></Route>
              <Route path="/students"  component={StudentlistComponents}></Route>
              <Route path="/addstudents"  component={createStudentComponent}></Route>
              <Route path="/updatestudents/:id"  component={updateStudentComponent}></Route>
              <Route path="/viewstudent/:id"  component={ViewStudentComponent}></Route>
             </Switch>
          </div>

          <FooterComponents/>
      </Router>
      
      
    </div>
  );
}

      

 
export default App;
