import React, { Component } from "react";
import FormSwitch from "../common/FormSwitch";
import TestOption from "../TestOption";
import styles from "./TestForm.scss";
import ResponsiveForm from "../common/ResponsiveForm";

const options = [
    { name: "monographs", info: "hello" },
    { name: "diagraphs", info: "goodbye" },
    { name: "diacritics", info: "hello2" }, 
];

class TestForm extends Component {
    state = {
        monograph: true,
        diagraph: true,
        diacritic: true
    };

    handleSubmit = e => {
        e.preventDefault();
        const { onStart } = this.props;
        onStart(this.state);
    }

    render() {

        const optionItems = options.map(
            option => 
                <TestOption 
                    value={this.state[option.name]} 
                    option={option} 
                />
        );

        return (
            <ResponsiveForm onSubmit={this.handleSubmit}>
                <div>
                    {optionItems}
                </div>

                <button type="submit" className={`${styles.StartButton} btn btn-lg btn-primary`}>
                    Start Test
                </button>
            </ResponsiveForm>
        );
    }
}

export default TestForm;