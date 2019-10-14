import React from 'react'
import styles from '../../Questions/questions-styles/Modal.module.css'

class FormModal extends React.Component {

    state = {
        showDropdown: false
    }

    showDropdown = () => {
        this.setState(() => ({showDropdown: true}))
    }

    render() {

        return (

            <div className={styles.wrapper} onClick={this.props.closeFormModal}>
                <form className={styles.content} action="submit" onSubmit={this.props.addQuestion}>
                    <div className={styles.closeButton}>&#10006;</div>
                    <p className={styles.label}>Question:</p>
                    <input type="text" className={styles.questionInput} name="questioninput" />
                    <p className={styles.label}>Tag:</p>
                    <input type="text" className={styles.tagInput} name="taginput" />
                    <button className={styles.addButton} type="submit">Add</button>
                </form>
            </div>

        )

    }

}

export default FormModal