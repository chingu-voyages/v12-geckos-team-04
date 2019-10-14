import React from 'react'
import styles from '../../Questions/questions-styles/Question.module.css'


class Question extends React.Component {

    state = {
        showExtraInfo: false
    }

    render() {

        return (
            <div>
                <li className={styles.listItem} onClick={(e) => this.props.showInfoModal(e, this.props.text, this.props.date, this.props.tag, this.props.id, this.props.answer)}><span className={styles.questionText}>{this.props.text}</span></li>
            </div>
        )

    }

}

export default Question