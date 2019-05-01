import React from "react";
import styles from "./Typography.scss";
import H1 from "./scale/H1";
import H2 from "./scale/H2";
import Body1 from "./scale/Body1";
import H3 from "./scale/H3";
import H4 from "./scale/H4";
import H5 from "./scale/H5";
import H6 from "./scale/H6";
import Button from "./scale/Button";
import Caption from "./scale/Caption";

const scale = {
    "h1": H1,
    "h2": H2,
    "h3": H3,
    "h4": H4,
    "h5": H5,
    "h6": H6,
    "body1": Body1,
    "button": Button,
    "caption": Caption
}

const colors = {
    primary: styles.Primary,
    secondary: styles.Secondary,
    tertiary: styles.Tertiary,
    gradient: styles.Gradient
};

const Typography = ({ color, children, type }) => {
    let TypographyComponent = scale[type];

    return TypographyComponent ? <TypographyComponent text={children} color={colors[color]} /> : null;
}

export default Typography;