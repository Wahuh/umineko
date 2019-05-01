import React from "react";
import styles from "./Card.scss";

const Card = ({ children, className, animationClassName }) => (
    <div className={`${className ? className : styles.Card} ${animationClassName}`}>
        {children}
    </div>
);

export default Card;