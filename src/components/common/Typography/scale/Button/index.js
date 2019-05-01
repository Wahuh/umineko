import React from "react";
import styles from "./Button.scss";

const Button = ({ text, color }) => (
    <p className={`${styles.Button} ${color}`}>{text}</p>
);

export default Button;