import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";
import history from "../history";
import Home from "../pages/Home";
import Likes from "../pages/Likes";

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/likes" exact component={Likes} />
                </Switch>
            </Router>
        </>
    );
};

export default App;