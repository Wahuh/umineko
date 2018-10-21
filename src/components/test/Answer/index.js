import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import styles from "./Answer.css";

const Answer = (props) => {
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            console.log("enter");
            event.preventDefault();
            console.log(props.onSubmit)
            props.onSubmit();
        }
    }

    return (
        <div className={styles.Answer}>
            <div className={props.reveal ? styles.reveal : styles.hidden}>
                <Typography variant="h6">The answer is: {props.answer}</Typography>
            </div>

            <FormControl>
                <FormGroup>
                    <TextField 
                    variant="outlined" 
                    type="text" 
                    onChange={props.onInput} 
                    label="Enter your answer"
                    autoFocus
                    onKeyPress={handleKeyPress}
                    />
                </FormGroup>
            </FormControl>
        </div>
    );
}

export default Answer;