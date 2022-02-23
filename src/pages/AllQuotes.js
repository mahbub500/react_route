import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'max', text: 'Learnig React is fun' },
    { id: 'q1', author: 'Tailor Outwell', text: 'Learnig Laravel is fun ' }
];
const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES} />
    );
}



export default AllQuotes;