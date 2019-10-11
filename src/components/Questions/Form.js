import React from 'react'
import './Questions.css'

const Form = (props) => {

    return (

        <div className="form-wrapper" onClick={props.closeForm}>
            <form className="form-content" action="submit" onSubmit={props.addQuestion}>
                <input type="text" className="question-input" name="input" onChange={props.handleInput} />
                <button className="add-button">Add</button>
            </form>
        </div>

    )
}

export default Form