import React, { useEffect, useState } from 'react'
import Quotes from './RandomQuote'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import QuoteFromAuthor from './quoteByAuthor'

function App() {

    return (
        <article className='container'>
            <Router>
                <Switch>
                    <Route path="/author/:authorName">
                        <QuoteFromAuthor />
                    </Route>
                    <Route path="/">
                        <Quotes />  
                    </Route>
                </Switch>
            </Router>
        </article>
    )

}

export default App