import React from "react";
import styles from "./Body1.scss";

const Body1 = ({ text, color }) => (
    <p className={`${styles.Body1} ${color}`}>{text}</p>
);

export default Body1;