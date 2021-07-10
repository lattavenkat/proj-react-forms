import { Link, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import LabelComp from "./Components/Basics/LabelComp";
import Student from "./Components/StuValidation/Student";
import Student1 from "./Components/StuValidationJson/Student1";

import Weather from "./Components/weatherforecast/Weather";
import Form from "./Components/weatherforecast/Form";
function App() {
  return (
    
    <div>
      <LabelComp/>
      <Student/>
      <Student1/>
    </div>
  );
}

export default App;
