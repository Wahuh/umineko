import React from "react";
import Typography from "@material-ui/core/Typography";

import styles from "./Question.css";

const Question = (props) => {
    return (
        <div className={styles.Question}>
            <div className={styles.QuestionTitle}>
                <Typography variant="h4">What is the English syllable?</Typography>
            </div>

            <div className={styles.Character}>
                <Typography variant="h1">{props.question}</Typography>
            </div>
        </div>

    );
}

export default Question;