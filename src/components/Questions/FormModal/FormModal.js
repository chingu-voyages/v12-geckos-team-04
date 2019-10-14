import React from 'react'
import './FormModal.css'

class FormModal extends React.Component {

    state = {
        showDropdown: false
    }

    showDropdown = () => {
        this.setState(() => ({showDropdown: true}))
    }

    render() {

        return (

            <div className="form-wrapper" onClick={this.props.closeFormModal}>
                <form className="form-content" action="submit" onSubmit={this.props.addQuestion}>
                    <p className="form-label">Question:</p>
                    <input type="text" className="question-input" name="questioninput" />
                    <p className="form-label">Tag:</p>
                    <input type="text" className="tag-input" name="taginput" />
                    <button className="add-button" type="submit">Add</button>
                </form>
            </div>

        )

    }

}

export default FormModal