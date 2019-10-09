import React from 'react'

const Form = (props) => {

    return (

        <div className="questions-wrapper">
            <form action="submit" onSubmit={props.handleAdd}>
                <input type="text" className="question-input" name="input" onChange={props.handleInput} />
                <button>Add new question</button>
            </form>
        </div>

    )
}

export default Form