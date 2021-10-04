import { Route, useParams } from 'react-router-dom';
import Comments from '../comments/Comments';
import HighlightedQuote from '../quotes/HighlightedQuote';

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
export default function QuoteDetails() {
  const params = useParams();
  const quote = quotes.find((q) => q.id === +params.quoteId);
  if (!quote) {
    return <p>No Quote Found!</p>;
  }
  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`} exact>
        <Comments />
      </Route>
    </div>
  );
}
