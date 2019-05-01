import React from "react";
import styles from "./H3.scss";

const H3 = ({ text, color }) => (
    <h3 className={`${styles.H3} ${color}`}>{text}</h3>
);

export default H3;