import React from 'react'
import Question from './Question'

const QuestionList = (props) => {
    return (
        <ul>
            {props.questions.map((questionObj, index) => <Question text={questionObj.text} date={questionObj.date} tag={questionObj.tag} id={index} answer={questionObj.answer} key={index} showInfoModal={props.showInfoModal} answered={props.answered} />)}
        </ul>
    )
}

export default QuestionList