import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";
export default function Student() {
  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    mob: "",
    hobbies: false,
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
        <table align="center" >
          <tr>
            <td>
             <h1><i>STUDENT DETAILS FORM</i></h1>
            </td>
          </tr>
          <tr>
            {" "}
            <td>
              <label> FIRST NAME:</label>

              <span class="focus-bg"></span>
            </td>
            <td>
              <div class="col-3">
                <input
                  class="effect-7"
                  type="text"
                  name="fname"
                  placeholder="enter first name"
                  value={formValues.fname}
                  onChange={handleOnChange}
                />

                <span class="focus-border">
                  <i></i>
                </span>
              </div>
            </td>
          </tr>
          <br />
          <br />
          <div>
            <ErrorMessage message={formErrors.fname} />
          </div>
          <tr>
            <td>
              <label> LAST NAME:</label>
              <span class="focus-bg"></span>
            </td>
            <td>
              {" "}
              <div class="col-3">
                <input
                  type="text"
                  name="lname"
                  placeholder="enter last name"
                  value={formValues.lname}
                  onChange={handleOnChange}
                />
                <span class="focus-border">
                  <i></i>
                </span>
              </div>
            </td>
          </tr>
          <br />
          <br />
          <div>
            <ErrorMessage message={formErrors.lname} />
          </div>
          <tr>
            <td>
              <label> EMAIL ADDRESS:</label>
              <span class="focus-bg"></span>
            </td>
            <td>
              {" "}
              <div class="col-3">
                <input
                  type="text"
                  name="email"
                  placeholder="enter email"
                  value={formValues.address}
                  onChange={handleOnChange}
                />
                <span class="focus-border">
                  <i></i>
                </span>
              </div>
            </td>
          </tr>
          <br />
          <br />
          <div>
            <ErrorMessage message={formErrors.email} />
          </div>
          <tr>
            <td>
              <label> MOBILE NUMBER:</label>

              <span class="focus-bg"></span>
            </td>
            <td>
              {" "}
              <div class="col-3">
                <input
                  type="text"
                  name="mob"
                  placeholder="enter mobile number.."
                  value={formValues.mob}
                  onChange={handleOnChange}
                />
                <span class="focus-border">
                  <i></i>
                </span>
              </div>
            </td>
          </tr>
          <br />
          <br />
          <div>
            <ErrorMessage message={formErrors.mob} />
          </div>
          {/* <label> GENDER:</label>
        <input type="radio" name="gender" value="male" checked/>Male
        <input type="radio" name="gender" value="female"/>Female<br /><br />
                */}
          <tr>
            <td>
              <label> Select your hobbies</label>
            </td>
            <td>
              <input
                type="checkbox"
                name="hobbies"
                value="cricket"
                onChange={handleOnChange}
              />
              cricket
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input
                type="checkbox"
                name="hobbies"
                value="football"
                onChange={handleOnChange}
              />
              football
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              {" "}
              <input
                type="checkbox"
                name="hobbies"
                value="kabaddi"
                onChange={handleOnChange}
              />
              kabaddi
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              {" "}
              <input
                type="checkbox"
                name="hobbies"
                value="vollybal"
                onChange={handleOnChange}
              />
              vollybal
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              {" "}
              <input
                type="checkbox"
                name="hobbies"
                value="racing"
                onChange={handleOnChange}
              />
              racing
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              {" "}
              <input
                type="checkbox"
                name="hobbies"
                value="hockey"
                onChange={handleOnChange}
              />
              hockey
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              {" "}
              <input
                type="checkbox"
                name="hobbies"
                value=""
                onChange={handleOnChange}
              />
              Others
            </td>
          </tr>

          <div>
            <ErrorMessage message={formErrors.hobbies} />
          </div>
          <tr>
            <td></td>
            <td>
              {" "}
              <button type="submit">Submit</button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}
