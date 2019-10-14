import React from 'react'
import styles from '../../Questions/questions-styles/Question.module.css'

const Question = (props) => {
    return (
        <div>
            <li className={styles.listItem} onClick={(e) => props.showInfoModal(e, props.text, props.date, props.tag, props.id, props.answer)}><span className={styles.questionText}>{props.text}</span></li>
        </div>
    )
}

export default Question