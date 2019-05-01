import React from "react";
import styles from "./CardBody.scss";

const CardBody = ({ children }) => (
    <div className={styles.CardBody}>
        {children}
    </div>
);

export default CardBody;