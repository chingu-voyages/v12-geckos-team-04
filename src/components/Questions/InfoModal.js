import React from 'react'
import styles from './questions-styles/Modal.module.css'

const InfoModal = (props) => {
    return (
        <div className={styles.wrapper} onClick={props.closeInfoModal}>
            <div className={styles.content}>
                <div className={styles.closeButton}>&#10006;</div>
                <ul className={styles.infoList}>
                    <li className={styles.label}>Question</li>
                    <li className={styles.data}>{props.text}</li>
                    {!props.answer &&
                        <div>
                            <li className={styles.label}>Added</li>
                            <li className={styles.data}>{props.date}</li>
                        </div>}
                    {props.tag &&
                        <React.Fragment>
                            <li className={styles.label}>Tag</li>
                            <li className={styles.data}>{props.tag}</li>
                        </React.Fragment>}
                    {props.answer &&
                        <React.Fragment>
                            <li className={styles.label}>Answer</li>
                            <li className={styles.data}>{props.answer}</li>
                        </React.Fragment>}
                </ul>
                <div>
                    {!props.answer && <button className={styles.answerButton} onClick={() => {props.showAnswerModal()}}>Answer this question</button>}
                    <button className={props.answer ? styles.deleteAnsweredButton : styles.deleteUnansweredButton} onClick={(e) => {props.deleteQuestion(e, props.id)}}>Delete this question</button>
                </div>
            </div>
        </div>
    )
}

export default InfoModal


