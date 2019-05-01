import React from "react";
import Card from "../../common/Card";
import CardHeader from "../../common/CardHeader";
import CardBody from "../../common/CardBody";
import Typography from "../../common/Typography";
import styles from "./SyllableCard.scss";

const SyllableCard = ({ syllable }) => (
    <div className={`${styles.CardWrapper} ${syllable.blank && styles.Hidden}`}>
        <Card className={styles.SyllableCard}>
            <CardHeader>
                <Typography type="h2">
                    {syllable.kana}
                </Typography>
            </CardHeader>

            <CardBody>
                <p className={styles.Roumaji}>
                    {syllable.roumaji}
                </p>
            </CardBody>
        </Card>
    </div>
)

export default SyllableCard;