import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AllQuotes from './pages/AllQuotes';
import NewQuote from "./pages/NewQuote";
import QuotesDetail from "./pages/QuotesDetail";
import Layout from "../src/components/layout/Layout"
function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/"> <Redirect to="/quotes" />  </Route>
        {/* <Route  path="/*"> <NewQuote />  </Route> */}
        <Route path="/quotes" exact  > <AllQuotes /> </Route>
        <Route path="/quotes/:qouteId" > <QuotesDetail /> </Route>
        <Route path="/new-quote"  > <NewQuote />  </Route>
      </Switch>
    </Layout>
  );
}

export default App;
