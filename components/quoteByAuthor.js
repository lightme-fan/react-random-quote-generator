import React, { useEffect, useState } from 'react'
import {Link, useParams } from 'react-router-dom'

const quoteAuthor_URL = 'https://quote-garden.herokuapp.com/api/v2/authors/'
const dataLength = '?page=1&limit=10'

function QuoteFromAuthor() {    
    const { authorName } = useParams()
    const [ qouteAuthor, setqouteAuthor ] = useState([])

    const getQuoteByAuthor = async () => {
        const API = quoteAuthor_URL+authorName+dataLength 
        const res = await fetch(API)
        const data = await res.json()
        setqouteAuthor(data.quotes)
        console.log(data.quotes);
    }

    useEffect(() => {
        getQuoteByAuthor()
    }, [])

    if (!qouteAuthor) {
         return null
    }

    return (
        <>
            <Link to='/'>Go back to the main page</Link>
            <ol>
                {qouteAuthor
                .map(quote => <li key={quote.id}>{quote.quoteText}</li>)}
            </ol>
            
        </>
    )
    
}

export default QuoteFromAuthor