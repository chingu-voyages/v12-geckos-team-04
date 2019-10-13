import React from 'react'
import './Question.css'

class Question extends React.Component {

    state = {
        showExtraInfo: false
    }

    render() {

        return (
            <div>
                <li className="list-item" onClick={(e) => this.props.showModal(e, this.props.text, this.props.date, this.props.tag, this.props.id)}><span className="question-text">{this.props.text}</span></li>
            </div>
        )

    }

}

export default Question