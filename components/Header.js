import React from 'react'

function Header(props) {
    return (
        <header className='heading'>
            <h2>Random</h2>
            <button type='button' value={props.value} onClick={props.onClick}>random</button>
            {/* <p>{props.quote}</p> */}
        </header>
    )
}
export default Header