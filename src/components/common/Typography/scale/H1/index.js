import React from "react";
import styles from "./H1.scss";

const H1 = ({ text, color }) => (
    <h1 className={`${styles.H1} ${color}`}>{text}</h1>
);

export default H1;