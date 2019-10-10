import React from 'react'

class Question extends React.Component {

    state = {
        showExtraInfo: false
    }

    render() {

        return (
            <div>
                <li className="list-item" onClick={this.props.showModal}><span className="question-text">{this.props.question}</span><span className="delete-question-button" onClick={() => {this.props.deleteQuestion(this.props.id)}}>&#10006;</span></li>
            </div>
        )

    }

}

export default Question