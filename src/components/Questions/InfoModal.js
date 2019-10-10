import React from 'react'
import './Questions.css'

const InfoModal = (props) => {
    return (
        <div className="modal-wrapper">
            <div className="modal-content">
                <div className="close-modal-button" onClick={props.closeModal}>&#10006;</div>
                <h2 className="modal-title">This is a title.</h2>
                <p className="modal-info">This is some info.</p>
            </div>
        </div>
    )
}

export default InfoModal