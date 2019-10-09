import React from 'react'
import ListItem from './ListItem'

const QuestionList = (props) => {
    return (
        <ul>
            {props.questions.map((question, index) => <ListItem question={question} id={index} key={index} deleteItem={props.deleteItem} />)}
        </ul>
    )
}

export default QuestionList