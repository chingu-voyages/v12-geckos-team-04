import React from 'react'
import styles from './questions-styles/Question.module.scss'

const Question = (props) => {
    return (
        <div>
            <li className={styles.listItem} onClick={(e) => props.showInfoModal(e, props.text, props.date, props.tag, props.id, props.answer, props.answered)}><span className={styles.questionText}>{props.text}</span></li>
        </div>
    )
}

export default Question