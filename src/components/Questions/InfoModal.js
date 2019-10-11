import React from 'react'
import './Questions.css'

const InfoModal = (props) => {
    return (
        <div className="modal-wrapper" onClick={props.closeModal}>
            <div className="modal-content">
                <div className="close-modal-button">&#10006;</div>
                <ul className="modal-info-list">
                    <li className="modal-info-label">Question</li>
                    <li className="modal-info-data">{props.question}</li>
                    <li className="modal-info-label">Added</li>
                    <li className="modal-info-data">{props.date}</li>
                </ul>
            </div>
        </div>
    )
}

export default InfoModal