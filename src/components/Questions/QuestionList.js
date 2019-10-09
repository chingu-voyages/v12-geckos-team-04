import React from 'react'
import Question from './Question'

const QuestionList = (props) => {
    return (
        <ul>
            {props.questions.map((question, index) => <Question question={question} id={index} key={index} deleteQuestion={props.deleteQuestion} />)}
        </ul>
    )
}

export default QuestionList