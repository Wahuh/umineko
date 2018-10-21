import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import Button from "@material-ui/core/Button";
import Question from "../Question";
import Answer from "../Answer";
import styles from "./Test";

@inject("testStore")
@observer
class Test extends Component {
    state = {
        input: "",
    }
    
    nextQuestion = () => {
        this.props.testStore.nextQuestion();
    }

    correctAnswer = () => {
        this.props.testStore.increaseScore();
    }

    evaluateAnswer = () => {
        if (this.state.input.toLowerCase() === this.props.testStore.test.currentQuestion.romanization) {
            console.log(this.state.input, "is correct")
            this.correctAnswer();
        }

        this.revealAnswer();
    }

    revealAnswer = () => {
        this.props.testStore.setReveal();
    }

    handleInput = (event) => {
        this.setState({
            input: event.target.value,
        });
    }
    
    render() {
        const { currentQuestion } = this.props.testStore.test;
        return (
            <div className={styles.Test}>
                <Question nextQuestion={this.nextQuestion} question={currentQuestion.character} />

                <Answer reveal={currentQuestion.reveal} answer={currentQuestion.romanization} onInput={this.handleInput} value={this.state.input} onSubmit={this.evaluateAnswer}  />
                
                <div className={styles.ButtonContainer}>
                    <Button onClick={this.evaluateAnswer} type="submit" variant="contained" color="primary">
                        Submit answer
                    </Button>
                    
                    <Button onClick={this.revealAnswer} type="submit" variant="contained" color="primary">
                        Reveal answer
                    </Button>

                    <Button onClick={this.nextQuestion} type="submit" variant="contained" color="primary" disabled={currentQuestion.reveal ? false : true}>
                        Next Question
                    </Button>
                </div>
            </div>
        );
    }
}

export default Test;