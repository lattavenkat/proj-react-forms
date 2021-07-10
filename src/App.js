import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import LabelComp from "./Components/Basics/LabelComp";
import Student from "./Components/StuValidation/Student";
import Student1 from "./Components/StuValidationJson/Student1";
import FirstPage from "./Components/Home/FirstPage";
import "./App.css";
import Studentfetch from "./Components/FetchFromJson/Studentfetch";
import AxiosFetch from "./Components/Home/AxiosFetch";
function App() {
  return (
    <Router>
      <div className="myApp"></div>
      <div >
        <ul class="appmenu-bar">
          <li>
            <Link to="/">FIRST PAGE</Link>
          </li>
          <li>
            <Link to="/label">LABEL COMPONENT</Link>
          </li>
          <li>
            <Link to="/student">STUDENT VALIDATION</Link>
          </li>
          <li>
            <Link to="/student1">VALIDATE AND PUT DATA USING POST JSON</Link>
          </li>
          <li>
            <Link to="/axios
            fetch">FETCH FROM AXIOS</Link>
          </li>
          </ul> 
          <Switch>
            <Route path="/" exact component={FirstPage}></Route>
            <Route path="/label" exact component={LabelComp}></Route>
            <Route path="/student" exact component={Student}></Route>
            <Route path="/student1" exact component={Student1}></Route>
            <Route path="/studentfetch" exact component={Studentfetch}></Route>
            <Route path="/axiosfetch" exact component={AxiosFetch}></Route>
          </Switch>
        
      </div>
    </Router>
  );
}

export default App;
