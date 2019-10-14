import React from 'react'
import './AnswerModal.css'

const AnswerModal = (props) => {
    return (
        <div className="modal-wrapper" onClick={props.closeAnswerModal}>
            <div className="modal-content">
                <div className="close-modal-button">&#10006;</div>
                <ul className="modal-info-list">
                    <li className="modal-info-data">{props.text}</li>
                </ul>
                <form action="submit" onSubmit={props.answerQuestion}>
                    <textarea name="answerInput" className="answer-input" cols="30" rows="5"></textarea>
                    <button className="submit-answer-button" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AnswerModal


