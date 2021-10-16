import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import useHttp from '../hooks/use-http';
import QuoteForm from '../quotes/QuoteForm';
import { addQuote } from '../lib/api';
export default function AddQuote() {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();
  useEffect(() => {
    if (status === 'completed') {
      history.push('/quotes');
    }
  }, [status, history]);
  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };
  return (
    <div>
      <h1>Add new Quote</h1>
      <QuoteForm
        isLoading={status === 'pending'}
        onAddQuote={addQuoteHandler}
      />
    </div>
  );
}
