import React from "react";
import styles from "./H5.scss";

const H5 = ({ text, color }) => (
    <h5 className={`${styles.H5} ${color}`}>{text}</h5>
);

export default H5;