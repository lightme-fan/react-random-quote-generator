import React, { useState, useEffect } from 'react'
import QuoteFromAuthor from './quoteByAuthor'
import Header from './Header'
import { Link } from 'react-router-dom'

const randomQuote_URL = 'https://quote-garden.herokuapp.com/api/v2/quotes/random'

function Quotes() {
    const [ randomQoute, setRandomQoute ] = useState([])
    
    const getQuote = async () => {
        const res = await fetch(randomQuote_URL)
        const data = await res.json()
        const getRandomQuote = data.quote
        setRandomQoute(getRandomQuote)
    }
    
    useEffect(() => {
        getQuote()
    }, [])

    function handleRandomButton(e) {
        getQuote()        
    }

    return (
        <>
            <Header onClick={handleRandomButton} value={randomQoute.quoteText}/>
            <p>{randomQoute.quoteText}</p>
            <div className='author-btn'>
                <Link to={`/author/${randomQoute.quoteAuthor}`}>
                    <button>
                        <span>{randomQoute.quoteAuthor}</span><br/>
                        <small>{randomQoute.quoteGenre}</small>
                    </button>
                </Link>
            </div>
        </>
    )
}
export default Quotes