import React, { Component } from "react";
import styles from "./App.css";
import TopBar from "../layout/TopBar";
import SideMenu from "../SideMenu";
import Content from "../layout/Content";
import MenuList from "../MenuList";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Provider } from "mobx-react";
import uiStore from "../../store/uiStore";
import testStore from "../../store/testStore";
import TestScreen from "../test/TestScreen";
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
    

    render() {
        return (
            <CssBaseline>
                <Provider uiStore={uiStore} testStore={testStore}>
                    <HashRouter>
                        <div className={styles.App}>
                            <TopBar />

                            <SideMenu>
                                <MenuList />    
                            </SideMenu>

                            <Content >
                                <Switch>
                                    <Route path="/test/hiragana" component={TestScreen} />
                                </Switch>
                            </Content>
                        </div>
                    </HashRouter>
                </Provider>
            </CssBaseline>
        );
    }
}

export default App;