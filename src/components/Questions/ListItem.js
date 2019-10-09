import React from 'react'

const ListItem = (props) => {
    return (
        <li><span>{props.question}</span><button onClick={() => {props.deleteItem(props.id)}}>Delete</button></li>
    )
}

export default ListItem