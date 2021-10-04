import React from 'react';
import QuoteList from '../quotes/QuoteList';

const quotes = [
  {
    id: 1,
    author: 'Test',
    text: 'React is fun',
  },

  {
    id: 2,
    author: 'Max',
    text: 'Learning React is great!',
  },
];
export default function AllQuotes() {
  return (
    <div>
      <h1>All Quotes</h1>
      <QuoteList quotes={quotes} />
    </div>
  );
}
