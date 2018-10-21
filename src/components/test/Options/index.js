import React, { Fragment } from "react";
import { observer, inject } from "mobx-react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import CheckBox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import * as constants from "../constants";

const Options = observer((props) => {
    const { testStore } = props;

    const toggleCheck = event => {
        console.log(event.target.value)
        testStore.toggleOption(event.target.value);
    };

    const startTest = event => {
        testStore.setTestStatus(constants.IN_PROGRESS);
    };

    const setQuestionCount = event => {
        testStore.setQuestionCount(event.target.value);
    }

    return (
        <Fragment>
            <Typography variant="h3">Hiragana Test</Typography>

            <FormControl>
                <FormGroup>
                    <FormControlLabel control={<CheckBox value="gojuon" onChange={toggleCheck} checked={testStore.options.gojuon} />} label="Gojūon" />
                    <FormControlLabel control={<CheckBox value="dakuon" onChange={toggleCheck} checked={testStore.options.dakuon} />}  label="Dakuon" />
                    <FormControlLabel control={<CheckBox value="handakuon" onChange={toggleCheck} checked={testStore.options.handakuon} />}  label="Handakuon" />
                    <FormControlLabel control={<CheckBox value="yoon" onChange={toggleCheck} checked={testStore.options.yoon} />}  label="Yōon" />
                    <FormControlLabel control={<CheckBox value="additionalLetters" onChange={toggleCheck} checked={testStore.options.additionalLetters} />} label="Additional letters" />
                </FormGroup>
            </FormControl>
            

            <Typography variant="h5">How many questions? (max: {testStore.maxQuestions})</Typography>
            <Input type="number" min={1} max={testStore.maxQuestions} value={testStore.options.questionCount} onChange={setQuestionCount} />
            <Button type="submit" variant="contained" color="secondary" onClick={startTest}>
                Start Test
            </Button>
        </Fragment>
    );
});

export default inject("testStore")(Options);