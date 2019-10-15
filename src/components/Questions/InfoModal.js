import React from 'react'
import styles from './questions-styles/Modal.module.css'

const InfoModal = (props) => {

    let deleteButtonStyles = `${styles.button} ${props.answer ? styles.deleteAnswered : styles.deleteUnanswered}`

    return (
        <div className={styles.wrapper} onClick={props.closeInfoModal}>
            <div className={styles.content}>
                <div className={styles.closeButton}>&#10006;</div>
                <ul className={styles.infoList}>
                    <li className={styles.question}>{props.text}</li>
                    {!props.answer &&
                        <div>
                            <li className={styles.date}>{props.date}</li>
                        </div>}
                    {props.tag &&
                        <React.Fragment>
                            <li className={styles.label}>Tag</li>
                            <li className={styles.tag}>{props.tag}</li>
                        </React.Fragment>}
                    {props.answer &&
                        <React.Fragment>
                            <li className={styles.answer}>{props.answer}</li>
                        </React.Fragment>}
                </ul>
                <div className={styles.buttonsWrapper}>
                    {!props.answer && <button className={[styles.button, styles.answerButton].join(' ')} onClick={() => {props.showAnswerModal()}}>Answer</button>}
                    <button className={deleteButtonStyles} onClick={(e) => {props.deleteQuestion(e, props.id)}}>Delete</button>
                </div>
            </div>
        </div >
    )
}

export default InfoModal


