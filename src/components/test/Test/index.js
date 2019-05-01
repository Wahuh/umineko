import React, { Component } from "react";
import { observer } from "mobx-react";
import testStore from "../../../stores/TestStore";
import FormSwitch from "../../common/FormSwitch";
import styles from "./Test.scss";
import ResponsiveForm from "../../common/ResponsiveForm";

@observer
class Test extends Component {
    state = {
        answer: ""
    };

    handleSubmit = e => {
        e.preventDefault();
        testStore.evaluateAnswer(this.state.answer);
        this.setState({ answer: "" });
    }

    handleChange = ({ currentTarget }) => {
        const { value } = currentTarget;
        this.setState({ answer: value });
    }

    render() {
        const { kana, roumaji } = testStore.currentQuestion;

        return (
            <ResponsiveForm onSubmit={this.handleSubmit}>
                {testStore.questionCount}
                <h3>{`SCORE: ${testStore.score}`}</h3>

                <h1 className={styles.Kana}>
                    {kana}
                </h1>

                <div className="form-group">
                    <input onChange={this.handleChange} value={this.state.answer} className="form-input" type="text" autoFocus />
                    <button type="button" className="btn btn-link">
                        Need a hint?
                    </button>
                </div>
            </ResponsiveForm>
        );
    }
}

export default Test;