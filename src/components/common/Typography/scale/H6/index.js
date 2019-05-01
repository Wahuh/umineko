import React from "react";
import styles from "./H6.scss";

const H6 = ({ text, color }) => (
    <h6 className={`${styles.H6} ${color}`}>{text}</h6>
);

export default H6;