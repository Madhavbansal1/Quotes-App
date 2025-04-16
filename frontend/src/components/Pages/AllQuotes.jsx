import React, { Fragment, useEffect, useState } from 'react'
import Quote from '../Qoute/Quote.jsx';

function AllQuotes() {
    // api call -> sideeffect
    let [quotes , setQuotes] = useState([])

    async function getQuotes(){
        let resp = await fetch('http://localhost:8080/allQuotes');
        let data = await resp.json();
        setQuotes(data);
    }

    useEffect(()=>{
        getQuotes()
    } , [])

  return (
    <Fragment>

        <div>AllQuotes</div>
        {
            quotes.map((quote ,index)=>{
                return(<Quote key={quote._id} author={quote.author} text={quote.text} id={quote._id} />)
            })
        }

    </Fragment>
  )
}

export default AllQuotes