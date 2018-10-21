import React from "react";
import Button from "@material-ui/core/Button";
import { observer, inject } from "mobx-react";
import * as constants from "../constants";

const Results = observer((props) => {
    const { testStore } = props;

    const newTest = () => {
        testStore.setTestStatus(constants.NOT_IN_PROGRESS);
    }

    return (
        <div>
            <Button type="submit" variant="contained" onClick={newTest}>New Test</Button>
        </div>
    );
});

export default inject("testStore")(Results);