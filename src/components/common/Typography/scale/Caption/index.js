import React from "react";
import styles from "./Caption.scss";

const Caption = ({ text, color }) => (
    <p className={`${styles.Caption} ${color}`}>{text}</p>
);

export default Caption;