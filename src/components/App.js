import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, light as LightTheme, dark as DarkTheme } from "../styles";
import history from "../history";
import { useDarkMode } from "../useDarkMode";
import Home from "../pages/Home";
import Likes from "../pages/Likes";
import Header from "./Header";

const App = () => {
    const [theme, setTheme] = useDarkMode();

    return (
        <ThemeProvider theme={{
            ...theme, setTheme: () => {
                setTheme(state => state.id === 'light' ? DarkTheme : LightTheme)
            }
        }}>
            <GlobalStyle />
            <Router history={history}>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/likes" exact component={Likes} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
};

export default App;