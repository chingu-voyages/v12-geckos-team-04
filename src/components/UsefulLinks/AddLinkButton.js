import React from 'react'
import styles from './AddLinkButton.module.scss'

const AddLinkButton = (props) => {
    return (
        <form className={styles.form} onSubmit={(e) => {props.addLink(e)}}>
            <button type="submit">Add New Link</button>
            <input type="text" name="textInput" />
        </form>
    )
}

export default AddLinkButton