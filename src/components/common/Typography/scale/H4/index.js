import React from "react";
import styles from "./H4.scss";

const H4 = ({ text, color }) => (
    <h4 className={`${styles.H4} ${color}`}>{text}</h4>
);

export default H4;