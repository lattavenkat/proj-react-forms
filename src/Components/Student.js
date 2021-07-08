import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import "./StudentError.css";
import "./StudentDesign.css";
export default function Student() {
  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    mob: "",
    score: -1,
    hobbies: false,
  };
  const score = [
    { id: 1, name: 1 },
    { id: 2, name: 2 },
    { id: 3, name: 3 },
    { id: 4, name: 4 },
    { id: 5, name: 5 },
  ];
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setformErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  
  //onformsubmit
  const handleDoSubmit = (e) => {
    e.preventDefault();
    setformErrors(validate(formValues));

    // console.log(formValues);

    console.log("===" + Object.entries(formErrors).length);

    setSubmitted(true);
    // console.log("Form has been Submitted sucessfully ");
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
    const onlystr = /^[a-zA-Z]+$/;

    if (!values.fname) {
      errors.fname = "*First Name cannot be empty";
    } else if (!onlystr.test(values.fname)) {
      errors.fname = "*Only alphabets are Permitted";
    }
    if (!values.lname) {
      errors.lname = "*Last Name cannot be empty";
    } else if (!onlystr.test(values.lname)) {
      errors.lname = "*Only alphabets are Permitted";
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "*Mail cannot be blank";
    } else if (!regex.test(values.email)) {
      errors.email = "*Wrong mail format";
    }
    const phoneRegExp =
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    if (!values.mob) {
      errors.mob = "*Mobile number cannot be empty";
    } else if (!phoneRegExp.test(values.mob)) {
      errors.mob = "*Please enter only number.";
    }
    if (values.score < 0) {
      errors.score = "*Select credit score";
    }
    // if (values.hobbies < 0) {
    //   errors.hobbies = "*Please Select your hobby";
    // }

    if (values.hobbies === false) {
      errors.hobbies = "*Invalid Selection";
    }

    return errors;
  };
  return (
    <div>
      <div id="mainContainer">
        <div class="aside">
          <div class="cardview">
            <form className="f1" onSubmit={handleDoSubmit} noValidate>
              {/* <h2 class="txt">
                STUDENT DETAILS FORM
              </h2> */}

              <div class="wrapper1">
                <h1>STUDENT DETAILS FORM</h1>
              </div>
              <table>
                {/* <h2 class="txt">
                  <i>STUDENT DETAILS FORM</i>
                </h2> */}
                <br />
                <tr>
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
                        placeholder="Enter first name"
                        value={formValues.fname}
                        onChange={handleOnChange}
                      />

                      <span class="focus-border">
                        <i></i>
                      </span>
                    </div>
                  </td>
                  <ErrorMessage message={formErrors.fname} />
                </tr>
                <br />
                <tr>
                  <td>
                    <label> LAST NAME:</label>
                    <span class="focus-bg"></span>
                  </td>
                  <td>
                    {" "}
                    <div class="col-3">
                      <input
                        class="effect-7"
                        type="text"
                        name="lname"
                        placeholder="Enter last name"
                        value={formValues.lname}
                        onChange={handleOnChange}
                      />
                      <span class="focus-border">
                        <i></i>
                      </span>
                    </div>
                  </td>
                  <ErrorMessage message={formErrors.lname} />
                </tr>
                <br />
                <tr>
                  <td>
                    <label> EMAIL ADDRESS:</label>
                    <span class="focus-bg"></span>
                  </td>
                  <td>
                    {" "}
                    <div class="col-3">
                      <input
                        class="effect-7"
                        type="text"
                        name="email"
                        placeholder="Enter email"
                        value={formValues.address}
                        onChange={handleOnChange}
                      />
                      <span class="focus-border">
                        <i></i>
                      </span>
                    </div>
                  </td>
                  <ErrorMessage message={formErrors.email} />
                </tr>
                <br />
                <tr>
                  <td>
                    <label> MOBILE NUMBER:</label>

                    <span class="focus-bg"></span>
                  </td>
                  <td>
                    <div class="col-3">
                      <input
                        class="effect-7"
                        type="text"
                        name="mob"
                        placeholder="Enter mobile number.."
                        value={formValues.mob}
                        onChange={handleOnChange}
                      />
                      <span class="focus-border">
                        <i></i>
                      </span>
                    </div>
                  </td>
                  <ErrorMessage message={formErrors.mob} />
                </tr>
                <br />
                <tr>
                  <td>
                    <label>GAME CREDIT SCORE :</label>
                    <span class="focus-bg"></span>
                  </td>
                  <td>
                    <div class="col-3">
                      <select
                        name="score"
                        onChange={handleOnChange}
                        value={formValues.score}
                      >
                        <option value="-1">Select your credit score</option>
                        {score.map((x) => {
                          return <option key={x.id}>{x.name}</option>
                        })}
                      </select>
                      <span class="focus-border">
                        <i></i>
                      </span>
                    </div>
                  </td>
                  <ErrorMessage message={formErrors.score} />
                </tr>
                <br />
                {/* <label> GENDER:</label>
        <input type="radio" name="gender" value="male" checked/>Male
        <input type="radio" name="gender" value="female"/>Female<br /><br />
                */}
                <tr>
                  <td>
                    <label> SELECT YOUR HOBBIES :</label>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="hobbies"
                      value="cricket"
                      onChange={handleOnChange}
                    />
                    CRICKET
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
                    FOOTBALL
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
                    KABADI
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    {" "}
                    <input
                      type="checkbox"
                      name="hobbies"
                      value="vollyball"
                      onChange={handleOnChange}
                    />
                    VOLLYBALL
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
                    RACING
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
                    HOCKEY
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
                    OTHERS
                  </td>
                  <ErrorMessage message={formErrors.hobbies} />
                </tr>

                <tr>
                  <td></td>
                  <td>
                    <section>
                      <button
                        type="submit"
                        class="overlay"
                        // onClick={() => {alert('woooooooot?');}}
                      >
                        Submit
                      </button>
                    </section>
                  </td>
                </tr>
                <br />
                <tr>
                
                  <div>
                    
                    {Object.entries(formErrors).length === 0 && submitted && (
                      //  alert(formValues.fname+" "+" your form has been submitted sucessfully")
                      <h3>SUBMITTED SUCCESSFULLY</h3>
                    )}
                  </div>
                </tr>
              </table>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
