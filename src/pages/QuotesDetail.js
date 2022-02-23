import { useParams, Route } from "react-router-dom";
import { Fragment } from "react";
import Comments from '../components/comments/Comments.js'
const QuotesDetail = () => {
    const param = useParams();

    return (
        <Fragment>
        <h1>This All Qoutes  {param.qouteId}</h1>
        <Route path={`/quotes/${param.qouteId}/comments`} >
            <Comments />
        </Route>
        </Fragment>
    );
}


export default QuotesDetail;