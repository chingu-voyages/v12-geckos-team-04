import React from 'react'
import styles from './questions-styles/NewQuestionButton.module.css'

const NewQuestionButton = (props) => {
    return (
        <div className={styles.wrapper}>
            <button className={styles.button} onClick={props.openForm}>Add a question</button>
        </div>
    )
}

export default NewQuestionButton