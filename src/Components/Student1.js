import React, { useState } from "react";
import "./Student1design.css";
import ErrorMessage from "./ErrorMessage";
export default function Student1() {
  const initialValues = {
    fname: "",
    lname: "",
    mail: "",
    mob: "",
    city: "",
    pincode: "",
    state: "",
    country: "",
    hobby: false,
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialValues);
  const [submitted, setSubmitted] = useState(false);
  const country = [
    { id: 1, name: "India" },
    { id: 2, name: "US" },
    { id: 3, name: "China" },
  ];
  const handleDoSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    // console.log(formValues);
    console.log("===" + Object.entries(formErrors).length);
    setSubmitted(true);
    console.log("Form has been Submitted sucessfully ");
  };

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
    } 
     else if (!onlystr.test(values.fname)) {
      errors.fname = "*Only alphabets are Permitted";
    }
    if (!values.lname) {
      errors.lname = "*Last Name cannot be empty";
    } 
     else if (!onlystr.test(values.lname)) {
      errors.lname = "*Only alphabets are Permitted";
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!values.mail) {
      errors.mail = "*Mail cannot be blank";
    } 
     else if (!regex.test(values.mail)) {
      errors.mail = "*Wrong mail format";
    }
    const phoneRegExp =
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    if (!values.mob) {
      errors.mob = "*Mobile number cannot be empty";
    } 
    else if (!phoneRegExp.test(values.mob)) {
      errors.mob = "*Please enter only number";
    }
    if (!values.city) {
      errors.city = "*City cannot be empty";
    } 
    else if (!onlystr.test(values.city)) {
      errors.city = "*Only alphabets are Permitted";
    }
    const pinregex = /^([1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{3}\\s[0-9]{3})$/;
    if (!values.pincode) {
      errors.pincode = "*Pincode cannot be empty";
    } 
    else if (!pinregex.test(values.pincode)) {
      errors.pincode =
        "*PIN code doesn't start from zero *Allows 6 digits only *Allows 6 consecutive digits (e.g. 431602) *Allows 1 space after 3 digits (e.g. 431 602)";
    }if (!values.state) {
      errors.state = "*State cannot be empty";
    }else if (!onlystr.test(values.state)) {
      errors.state = "*Only alphabets are Permitted";
    }
    if (values.country < 0) {
      errors.country = "*Select your country";
    }

    if (values.hobby === false) {
      errors.hobby = "*Invalid Selection";
    }
    return errors;
  };
  return (
    <div>
      <h4>STUDENT REGISTRATION FORM</h4>
      <form onSubmit={handleDoSubmit} noValidate>
        <table align="center" cellpadding="10">
          {/* ----- First Name ---------------------------------------------------------- */}
          <tr>
            <td>FIRST NAME</td>
            <td>
              <input
                type="text"
                name="fname"
                maxlength="30"
                value={formValues.fname}
                onChange={handleOnChange}
              />
            </td>
            <ErrorMessage message={formErrors.fname} />
          </tr>
          {/* ----- Last Name---------------------------------------------------------- */}
          <tr>
            <td>LAST NAME</td>
            <td>
              <input type="text" name="lname" maxlength="30" value={formValues.lname}
                onChange={handleOnChange}/>
            </td>
            <ErrorMessage message={formErrors.lname} />
          </tr>
          {/* ----- Email Id ---------------------------------------------------------- */}
          <tr>
            <td>EMAIL ID</td>
            <td>
              <input type="text" name="mail" maxlength="100" value={formValues.mail}
                onChange={handleOnChange}/>
            </td>
            <ErrorMessage message={formErrors.mail} />
          </tr>
          {/* ----- Mobile Number ---------------------------------------------------------- */}
          <tr>
            <td>MOBILE NUMBER</td>
            <td>
              <input type="text" name="mob" maxlength="10" value={formValues.mob}
                onChange={handleOnChange}/>
            </td>
            <ErrorMessage message={formErrors.mob} />
          </tr>          
          {/* ----- City ---------------------------------------------------------- */}
          <tr>
            <td>CITY</td>
            <td>
              <input type="text" name="city" maxlength="30" value={formValues.city}
                onChange={handleOnChange} />
            </td>
            <ErrorMessage message={formErrors.city} />
          </tr>
          {/* ----- Pin Code ---------------------------------------------------------- */}
          <tr>
            <td>PIN CODE</td>
            <td>
              <input type="text" name="pincode" maxlength="6" value={formValues.pincode}
                onChange={handleOnChange}/>
            </td>
            <ErrorMessage message={formErrors.pincode} />
          </tr>
          {/* ----- State ---------------------------------------------------------- */}
          <tr>
            <td>STATE</td>
            <td>
              <input type="text" name="state" maxlength="30" value={formValues.state}
                onChange={handleOnChange}/>
            </td>
            <ErrorMessage message={formErrors.state} />
          </tr>
          {/* ----- Country ---------------------------------------------------------- */}
          <tr>
            <td>COUNTRY</td>
            <td>
              <select
                name="country"
                onChange={handleOnChange}
                value={formValues.country}
              >
                <option value="-1">Select your country</option>
                {country.map((x) => {
                  return <option key={x.id}>{x.name}</option>;
                })}
              </select>
            </td>
            <ErrorMessage message={formErrors.country} />
          </tr>
          {/* ----- Hobbies ---------------------------------------------------------- */}
          <tr>
            <td>
              HOBBIES <br />
              <br />
              <br />
            </td>
            <td>
              <input
                type="checkbox"
                name="hobby"
                value="Drawing"
                onChange={handleOnChange}
              />
              Drawing
              <input
                type="checkbox"
                name="hobby"
                value="Singing"
                onChange={handleOnChange}
              />
              Singing
              <input
                type="checkbox"
                name="hobby"
                value="Dancing"
                onChange={handleOnChange}
              />
              Dancing
              <input
                type="checkbox"
                name="hobby"
                value="Cooking"
                onChange={handleOnChange}
              />
              Sketching
              <br />
            </td>
            <ErrorMessage message={formErrors.hobby} />
          </tr>
          {/* ----- Submit and Reset ------------------------------------------------- */}
          <tr>
            <td colspan="2" align="center">
              <button type="submit" >Submit</button>
              <input type="reset" value="Reset" />
            </td>
          </tr>
          {Object.entries(formErrors).length === 0 && submitted && (
            //  alert(formValues.fname+" "+" your form has been submitted sucessfully")
            <h3>SUBMITTED SUCCESSFULLY</h3>
          )}
        </table>
      </form>

      {/* bgdesign */}
      <div>
        <div class="ripple-background">
          <div class="circle xxlarge shade1"></div>
          <div class="circle xlarge shade2"></div>
          <div class="circle large shade3"></div>
          <div class="circle mediun shade4"></div>
          <div class="circle small shade5"></div>
        </div>
        {/* bgdesign */}
      </div>
    </div>
  );
}
