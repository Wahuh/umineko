import React from "react";
import styles from "./CardFooter.scss";

const CardFooter = ({ children }) => (
    <div className={styles.CardFooter}>
        {children}
    </div>
);

export default CardFooter;