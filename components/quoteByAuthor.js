import React from 'react'
import {Link, useParams } from 'react-router'


const quoteAuthor_URL = 'https://quote-garden.herokuapp.com/api/v2/authors/'
const dataLength = '?page=1&limit=10'

function QuoteFromAuthor() {    
    const { authorName } = useParams()
    const [ qouteAuthor, setqouteAuthor ] = useState('')

    const getQuoteByAuthor = async () => {
        const API = quoteAuthor_URL+author+dataLength 
        const res = await fetch(API)
        const data = await res.json()
        setqouteAuthor(data)
        console.log(data);
    }

    useEffect(() => {
        getQuoteByAuthor()
    }, [])

    // function handleClick() {
        
    // }


    return (
        <>
            <Link to={`/author/${qouteAuthor.quoteAuthor}`}>Home</Link>
            <div>
                {qouteAuthor.map(quote => <p key={quote.id}>{quote.quoteText}</p>)}
            </div>
        </>
    )
    
}

export default QuoteFromAuthor