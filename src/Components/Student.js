import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";
export default function Student() {
  const initialValues = {
    fname: '',
    lname: '',
    email: '',
    mob: '',
    hobbies:false,
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setformErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  //onformsubmit
  const handleDoSubmit = (e) => {
    e.preventDefault();
    setformErrors(validate(formValues));

    console.log(formValues);
    console.log("Form has been sucessfully Submitted");

    console.log("===" + Object.entries(formErrors).length);

    setSubmitted(true);
    //props.onUserAdd(formValues);
  };
  //onchangeevent
  const handleOnChange = (event) => {
    const isInternalExternal = event.target.type === "checkbox";

    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    setFormValues((prev) => {
      return {
        ...prev,
        [name]: isInternalExternal ? event.target.checked : value,
      };
    });
  };
  const validate = (values) => {
    let errors = {};
    console.log(values);
    if (!values.fname) {
      errors.fname = "First Name cannot be empty";
    }
    if (!values.lname) {
      errors.lname = "Last Name cannot be empty";
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Mail cannot be blank";
    } else if (!regex.test(values.email)) {
      errors.email = "Wrong mail format";
    }
    const phoneRegExp =
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    if (!values.mob) {
      errors.mob = "Mobile number cannot be empty";
    } else if (!phoneRegExp.test(values.mob)) {
      errors.mob = "Please enter only number.";
    }
    if (values.hobbies < 0) {
      errors.type = "Please Select your hobby";
    }

    if (values.hobbies == false) {
      errors.hobbies = "invalid";
    }

    return errors;
  };
  return (
    <div>
      {Object.entries(formErrors).length == 0 && submitted && (
        <div> Submitted Sucessfully </div>
      )}
      <form className="f1" onSubmit={handleDoSubmit} noValidate>
        <label> FIRST NAME:</label>
        <input type="text"name="fname"
          placeholder="enter first name"value={formValues.fname}onChange={handleOnChange}/>
        <br />
        <br />
        <div>
          <ErrorMessage message={formErrors.fname} />
        </div>
        <label> LAST NAME:</label>
        <input
          type="text"
          name="lname"
          placeholder="enter last name"
          value={formValues.lname}
          onChange={handleOnChange}
          
        />
        <br />
        <br />
        <div>
          <ErrorMessage message={formErrors.lname} />
        </div>
        <label> EMAIL ADDRESS:</label>
        <input
          type="text"
          name="email"
          placeholder="enter email"
          value={formValues.address}
          onChange={handleOnChange}
          
        />
        <br />
        <br />
        <div>
          <ErrorMessage message={formErrors.email} />
        </div>
        <label> MOBILE NUMBER:</label>
        <input type="text"name="mob"placeholder="enter mobile number.."value={formValues.mob}onChange={handleOnChange}/><br /><br />
        
        <div>
          <ErrorMessage message={formErrors.mob} />
        </div>
        {/* <label> GENDER:</label>
        <input type="radio" name="gender" value="male" checked/>Male
        <input type="radio" name="gender" value="female"/>Female<br /><br />
                */}
        <label> Select your hobbies</label>
          <input type="checkbox" name="hobbies" value="cricket" onChange={handleOnChange}/>
          cricket
          <input type="checkbox" name="hobbies" value="football" onChange={handleOnChange}/>
          football
          <input type="checkbox" name="hobbies" value="kabaddi" onChange={handleOnChange}/>
          kabaddi
          <input type="checkbox" name="hobbies" value="vollybal" onChange={handleOnChange}/>
          vollybal
          <input type="checkbox" name="hobbies" value="racing" onChange={handleOnChange} />
          racing
          <input type="checkbox" name="hobbies" value="hockey" onChange={handleOnChange}/>
          hockey
           Other:
          <input type="checkbox" name="hobbies" value="" onChange={handleOnChange}/>
          <div>
            <ErrorMessage message={formErrors.hobbies} />
          </div>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
