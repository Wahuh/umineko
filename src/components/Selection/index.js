import React from "react";
import { Link } from "react-router-dom";
import LearnIcon from "../common/icons/LearnIcon";
import TestIcon from "../common/icons/TestIcon";
import styles from "./Selection.scss";
import Typography from "../common/Typography";
import ResponsiveScreen from "../common/ResponsiveScreen";

const Selection = ({ match }) => {
    const { mode } = match.params;  
    return (
        <ResponsiveScreen>
            <Link className={styles.SelectionLink} to={`/${mode}/study/all`}>
                <div className={styles.Selector}>
                    <div className={styles.SelectorIcon}>
                        <LearnIcon />
                    </div>

                    <div className={styles.SelectorBody}>
                        <h2 className={`${styles.Title} text-dark`}>
                            {`${mode} Study`}
                        </h2>
                        <p className={styles.Description}>
                            {`New to ${mode}? Catch up on the basics here!`}
                        </p>
                    </div>

                </div>
            </Link>

            <Link className={styles.SelectionLink} to={`/${mode}/test`}>
                <div className={styles.Selector}>
                    <div className={styles.SelectorIcon}>
                        <TestIcon />
                    </div>

                    <div className={styles.SelectorBody}>
                        <h2 className={`${styles.Title} text-dark`}>
                            {`${mode} Test`}
                        </h2>
                        <p className={styles.Description}>
                            {`Feeling confident? Test your ${mode}!`}
                        </p>
                    </div>
                </div>
            </Link>
        </ResponsiveScreen>
    );
};

export default Selection;