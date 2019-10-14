import React from 'react'
import styles from '../../Questions/questions-styles/Modal.module.css'

const AnswerModal = (props) => {
    return (
        <div className={styles.wrapper} onClick={props.closeAnswerModal}>
            <div className={styles.content}>
                <div className={styles.closeButton}>&#10006;</div>
                <ul className={styles.infoList}>
                    <li className={styles.infoData}>{props.text}</li>
                </ul>
                <form action="submit" onSubmit={props.answerQuestion}>
                    <textarea name="answerInput" className={styles.answerInput} cols="30" rows="5"></textarea>
                    <button className={styles.submitButton} type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AnswerModal