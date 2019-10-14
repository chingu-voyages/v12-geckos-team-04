import React from 'react'
import Question from '../Question/Question'
import './QuestionList.css'

const QuestionList = (props) => {
    return (
        <ul>
            {props.questions.map((questionObj, index) => <Question text={questionObj.text} date={questionObj.date} tag={questionObj.tag} id={index} answer={questionObj.answer} key={index} showInfoModal={props.showInfoModal} />)}
        </ul>
    )
}

export default QuestionList