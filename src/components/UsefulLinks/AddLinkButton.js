import React from 'react'
import styles from './AddLinkButton.module.scss'

const AddLinkButton = (props) => {
    return (
        <form className={styles.form} onSubmit={() => {props.addLink()}}>
            <button type="submit">Add New Link</button>
            <input type="text" name="linkInput" />
        </form>
    )
}

export default AddLinkButton