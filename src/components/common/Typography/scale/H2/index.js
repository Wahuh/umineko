import React from "react";
import styles from "./H2.scss";

const H2 = ({ text, color }) => (
    <h2 className={`${styles.H2} ${color}`}>{text}</h2>
);

export default H2;