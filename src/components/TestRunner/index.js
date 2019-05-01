import React, { Component } from "react";
import TestForm from "../TestForm";
import testStore from "../../stores/TestStore";
import Test from "../test/Test";
import ResponsiveScreen from "../common/ResponsiveScreen";

class TestRunner extends Component {
    state = {
        isRunning: false
    };

    componentDidMount() {
        const { match } = this.props;
        testStore.changeMode(match.params.mode);
    }

    handleStart = options => {
        testStore.start(options);
        this.setState({ isRunning: true });
    }

    render() {
        const { isRunning } = this.state;
        return (
            <>
                {/* <ul class="step">
                    <li class={`step-item ${!isRunning && "active"}`}>
                        <a href="#">Options</a>
                    </li>
                    <li class={`step-item ${isRunning && "active"}`}>
                        <a href="#">Test</a>
                    </li>
                    <li class="step-item">
                        <a href="#">Results</a>
                    </li>
                </ul> */}

                {isRunning ? <Test /> : <TestForm onStart={this.handleStart} />}
            </>
        )
    }
}

export default TestRunner;