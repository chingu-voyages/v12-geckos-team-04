import React from 'react'
import './InfoModal.css'

const InfoModal = (props) => {
    return (
        <div className="modal-wrapper" onClick={props.closeInfoModal}>
            <div className="modal-content">
                <div className="close-modal-button">&#10006;</div>
                <ul className="modal-info-list">
                    <li className="modal-info-label">Question</li>
                    <li className="modal-info-data">{props.text}</li>
                    <li className="modal-info-label">Added</li>
                    <li className="modal-info-data">{props.date}</li>
                    {props.tag && <React.Fragment><li className="modal-info-label">Tag</li> <li className="modal-info-data">{props.tag}</li></React.Fragment>}
                </ul>
                <button className="answer-button" onClick={() => {props.showAnswerModal()}}>Answer this question</button>
                <button className="delete-button" onClick={() => {props.deleteQuestion(props.id)}}>Delete this question</button>
            </div>
        </div>
    )
}

export default InfoModal


