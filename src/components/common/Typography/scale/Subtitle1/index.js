import React from "react";
import styles from "./Subtitle1.scss";

const Subtitle1 = ({ text, color }) => (
    <p className={`${styles.Subtitle1} ${color}`}>{text}</p>
);

export default Subtitle1;