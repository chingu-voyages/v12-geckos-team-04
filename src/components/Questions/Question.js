import React from 'react'

class Question extends React.Component {

    state = {
        showExtraInfo: false
    }

    showExtraInfo = () => {
        this.setState((prevState) => ({showExtraInfo: !prevState.showExtraInfo}))
    }

    render() {

        return (
            <div>
                <li className="list-item" onClick={this.showExtraInfo}><span className="question-text">{this.props.question}</span><span className="delete-button" onClick={() => {this.props.deleteQuestion(this.props.id)}}>&#10006;</span></li> <li className={"extra-info" + (this.state.showExtraInfo ? ' show' : '')}>This is some extra info</li>
            </div>
        )

    }

}

export default Question