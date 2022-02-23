import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
    const addQuteHandler =  quoteData => {
        console.log(quoteData);
    }
    return (
        <QuoteForm onAddQuata={addQuteHandler} />
        
        );
}


export default NewQuote;