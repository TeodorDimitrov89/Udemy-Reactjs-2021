import React from 'react';
import { useHistory } from 'react-router';
import QuoteForm from '../quotes/QuoteForm';

export default function AddQuote() {
  const history = useHistory();
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    history.push('/quotes');
  };
  return (
    <div>
      <h1>Add new Quote</h1>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </div>
  );
}
