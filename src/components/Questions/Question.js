import React from 'react'

class Question extends React.Component {

    state = {
        showExtraInfo: false
    }

    render() {

        return (
            <div>
                <li className="list-item" onClick={(e) => this.props.showModal(e, this.props.question, this.props.date)}><span className="question-text">{this.props.question}</span><span className="delete-question-button" title="Delete" onClick={() => {this.props.deleteQuestion(this.props.id)}}>&#10006;</span></li>
            </div>
        )

    }

}

export default Question