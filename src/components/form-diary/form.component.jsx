import React from "react";
import './form.style.css'

const Form = (props) => (
  <form action="" className="form__diary" onSubmit = {props.submit}>
    <h1 className="form-header">What have you learnt today?</h1>
    <input type="text" placeholder="Title" className="form__diary--title" id='form__diary--title' />
    <textarea name="" id="form__diary--content" cols="30" rows="10" placeholder='Write notes here...'></textarea>
    <input type='submit' value='Submit'  />
  </form>
);

// class Form extends Component {
//     render (){
//         return(
//             <form action="" className="form__diary">
//               <h1 className="form-header">What have you learnt today?</h1>
//               <input type="text" placeholder="Title" class="form__diary--title" />
//               <textarea name="" id="form__diary--content" cols="30" rows="10" placeholder='Write notes here...'></textarea>
//               <input type='submit' value='Submit' />
//             </form>
//           )
//     }
// }

export default Form;