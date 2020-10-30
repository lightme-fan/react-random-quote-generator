import React from 'react'

function Header(props) {
    return (
        <header className='header'>
            <div className='heading'>
                <h2>Random</h2>
                <button type='button' value={props.value} onClick={props.onClick}>random</button>
            </div>
        </header>
    )
}
export default Header