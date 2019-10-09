import React from 'react'

const Question = (props) => {
    return (
        <li><span>{props.question}</span><button onClick={() => {props.deleteQuestion(props.id)}}>Delete</button></li>
    )
}

export default Question