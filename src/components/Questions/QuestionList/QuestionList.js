import React from 'react'
import Question from '../Question/Question'
import './QuestionList.css'

const QuestionList = (props) => {
    return (
        <ul>
            {props.questions.map((questionObj, index) => <Question text={questionObj.text} date={questionObj.date} tag={questionObj.tag} id={index} key={index} deleteQuestion={props.deleteQuestion} showModal={props.showModal} />)}
        </ul>
    )
}

export default QuestionList