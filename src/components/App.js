import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";
import history from "../history";
import Home from "../pages/Home";
import Likes from "../pages/Likes";
import Header from "./Header";

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Router history={history}>
                <Switch>
                    <Header />
                    <Route path="/" exact component={Home} />
                    <Route path="/likes" exact component={Likes} />
                </Switch>
            </Router>
        </>
    );
};

export default App;