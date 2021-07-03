import React from "react";

export default function Student() {
  return (
    <div>
      <form className="f1">
        <label> FIRST NAME:</label>
        <input type="text" name="fname" placeholder="enter first name" required/><br /><br />
       
        <label> LAST NAME:</label>
        <input type="text" name="Lname"placeholder="enter last name"required/><br /><br />
       
        <label> EMAIL ADDRESS:</label>
        <input type="text" name="email" placeholder="enter email" required /><br /><br />
        
        <label> MOBILE NUMBER:</label>
        <input type="text" name="mob"placeholder="enter mobile number.." required/><br /><br />
        <label> GENDER:</label>
        <input type="radio" name="gender" value="male" checked/>Male
        <input type="radio" name="gender" value="female"/>Female<br /><br />
              
        Select your hobbies
        <input type="checkbox" name="hobbies" value="cricket" />
        cricket
        <input type="checkbox" name="hobbies" value="football" />
        football
        <input type="checkbox" name="hobbies" value="kabaddi" />
        kabaddi
        <input type="checkbox" name="hobbies" value="vollybal" />
        vollybal
        <input type="checkbox" name="hobbies" value="racing" />
        racing
        <input type="checkbox" name="hobbies" value="hockey" />
        hockey: Other:
        <input type="checkbox" name="hobbies" value="" />
      </form>
    </div>
  );
}
