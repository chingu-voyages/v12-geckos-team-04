import React from 'react'
import styles from './questions-styles/Modal.module.css'

const UnansweredInfoModal = (props) => {

    let deleteButton = `${styles.button} ${styles.deleteUnanswered}`
    let answerButton = `${styles.button} ${styles.answerButton}`
    let closeButton = `close-button ${styles.closeButton}`

    return (
        <div className={styles.wrapper} onClick={props.closeInfoModal}>
            <div className={styles.content}>
                <div className={closeButton}>&#10006;</div>
                <ul className={styles.infoList}>
                    <li className={styles.question}>{props.text}</li>
                    <div>
                        <li className={styles.date}>{props.date}</li>
                    </div>
                    {props.tag &&
                        <React.Fragment>
                            <li className={styles.label}>Tag</li>
                            <li className={styles.tag}>{props.tag}</li>
                        </React.Fragment>}
                </ul>
                <div className={styles.buttonsWrapper}>
                    <button className={answerButton} onClick={() => {props.showAnswerModal()}}>Answer</button>
                    <button className={deleteButton} onClick={(e) => {props.deleteQuestion(e, props.id)}}>Delete</button>
                </div>
            </div>
        </div >
    )
}

export default UnansweredInfoModal


