import { useEffect } from 'react';
import QuoteForm from '../components/quotes/QuoteForm';
import { useHistory } from 'react-router-dom';
import useHttp from '../components/hooks/use-http';
import { addQuote } from '../components/lib/api';

const NewQuote = () => {
   const {sendRequest, status} = useHttp(addQuote);
   const history = useHistory();

   useEffect(()=>{
       if(status === 'complete'){
        history.push('/quote');
       }
   },[status,history]);

    const addQuteHandler =  (quoteData) => {
        sendRequest(quoteData);
        
    }
    return  <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuteHandler} />;
          
};


export default NewQuote;