import React from "react";
import styles from "./TestScreen.css";
import { observer, inject } from "mobx-react";
import Options from "../Options";
import Test from "../Test";
import Results from "../Results";
import * as constants from "../constants"

const TestScreen = observer((props) => {
    const { test } = props.testStore;
    let screen;

    if (test.status === constants.IN_PROGRESS) {
        screen = <Test />
    } else if (test.status === constants.COMPLETED) {
        screen = <Results />
    } else {
        screen = <Options />
    }

    return (
        <div className={styles.TestScreen}>
            {screen}
        </div>
    );
});

export default inject("testStore")(TestScreen);