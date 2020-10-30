import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import QuoteFromAuthor from './quoteByAuthor'
import Header from './Header'
import Quotes from './Quote'
import Button from './Button'

const randomQuote_URL = 'https://quote-garden.herokuapp.com/api/v2/quotes/random'

function App() {
    const [ randomQoute, setRandomQoute ] = useState('')

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
        <article className='container'>
            <Router>
                <Switch>
                    <Route path="/authors/:author">
                        <QuoteFromAuthor />
                    </Route>
                    <Route path="/">
                        <Header onClick={handleRandomButton} value={randomQoute.quoteText}/>
                        <Quotes quote={randomQoute.quoteText}/>
                        <Button author={randomQoute.quoteAuthor} genre={randomQoute.quoteGenre}/>
                    </Route>
                </Switch>
            </Router>
        </article>
    )

}

export default App