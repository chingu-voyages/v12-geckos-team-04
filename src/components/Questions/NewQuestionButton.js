import React from 'react'

const NewQuestionButton = (props) => {
    return (
        <div className="new-question-button-wrapper">
            <button className="new-question-button" onClick={props.openForm}>Add question</button>
        </div>
    )
}

export default NewQuestionButton
