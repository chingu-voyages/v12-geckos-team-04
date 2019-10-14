import React from 'react'
import './Header.css'

const Header = (props) => {
    return (
        <div>
            <h1 className="questions-title">{props.title}:</h1>
        </div>
    )
}

export default Header