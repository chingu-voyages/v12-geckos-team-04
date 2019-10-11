import React from 'react'
import Question from '../Question/Question'
import './QuestionList.css'

const QuestionList = (props) => {
    return (
        <ul>
            {props.questions.map((question, index) => <Question question={question.question} date={question.date} tag={question.tag} id={index} key={index} deleteQuestion={props.deleteQuestion} showModal={props.showModal} />)}
        </ul>
    )
}

export default QuestionList