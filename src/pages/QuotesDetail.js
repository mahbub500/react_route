import { useParams, Route, Link } from "react-router-dom";
import { Fragment } from "react";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from '../components/comments/Comments.js';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'max', text: 'Learnig React is fun' },
    { id: 'q2', author: 'Tailor Outwell', text: 'Learnig Laravel is fun ' }
];


const QuotesDetail = () => {
    const param = useParams();
     const quote = DUMMY_QUOTES.find(quote => quote.id === param.qouteId);
     if (!quote) {
        return <p>No Quote Found</p>;
    }

    return (
        <Fragment>
       <HighlightedQuote text={quote.text} author={quote.author} />
       <Route path={`/quotes/${param.qouteId}`} exact>
       <div className="centered">
       <Link className='btn--flat' to={`/quotes/${param.qouteId}/comments`}>Load Connents </Link>
       </div>
       </Route>
        <Route path={`/quotes/${param.qouteId}/comments`} >
            <Comments />
        </Route>
        </Fragment>
    );
}


export default QuotesDetail;