import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../NavBar";
import styles from "./App.scss";
import Selection from "../Selection";
import Learn from "../learn/Learn";
import { hot } from 'react-hot-loader/root'
import Breadcrumb from "../Breadcrumb";
import Header from "../Header";
import TestRunner from "../TestRunner";


const App = () => {
    return (
        <Router>
            <div className={styles.App}>
                <Header>
                    <NavBar />
                    <Breadcrumb />
                </Header>
                <div className={styles.Content}>
                    <Switch>
                        <Route path="/" exact render={() => <div></div>} />
                        <Route path="/:mode" exact component={Selection} />
                        <Route path="/:mode/study" component={Learn} />
                        <Route path="/:mode/test" component={TestRunner} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default hot(App);