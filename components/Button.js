import React from 'react'

function Button(props) {
    return (
        <div className='author-btn'>
            <button onClick={props.onClick}>
                <span>{props.author}</span><br/>
                <small>{props.genre}</small>
            </button>
        </div>
    )
}
export default Button