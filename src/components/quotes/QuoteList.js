import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quotesA,quotesB) => {
    if(ascending){
      return quotesA.id > quotesB.id ? 1 : -1;
    } else {
      return quotesA.id < quotesB.id ? 1 : -1;
    }
  });
}

const QuoteList = (props) => {

  const history = useHistory();
  const location = useLocation();
  const queryFarams  =  new URLSearchParams(location.search);

  const isSortingAscending = queryFarams.get('sort') === 'asc';

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending )
  // console.log(queryFarams); 

  const changeSortingHandler = ( ) => {
    history.push(`${location.pathname}?sort=${(isSortingAscending ? 'desc' : 'asc')}`);
  }
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler} >Sort {isSortingAscending ? 'Descending' : 'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
