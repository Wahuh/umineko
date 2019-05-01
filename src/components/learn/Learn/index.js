import React, { Component } from "react";
import { observer } from "mobx-react";
import syllabaryStore from "../../../stores/SyllabaryStore";
import styles from "./Learn.scss";
import SyllableCard from "../SyllableCard";
import { NavLink } from "react-router-dom";
import Typography from "../../common/Typography";

@observer
class Learn extends Component {
    constructor(props) {
        super(props);
        const { match } = this.props;
        syllabaryStore.changeSyllabary(match.params.mode);
    }

    render() {
        const { match } = this.props;
        return (
            <div className={styles.Learn}>
                <ul className="tab tab-block">
                    {syllabaryStore.categories.map(
                        category => 
                            <li className="tab-item" onClick={() => syllabaryStore.changeFilter(category)}>
                                <NavLink style={{ fontSize: "0.7rem" }} to={`${match.url}/${category}`}>
                                    {category.toUpperCase()}
                                </NavLink>
                            </li>
                    )}
                </ul>
                <div className={styles.SyllableList}>
                    {syllabaryStore.syllables.map(syllable => <SyllableCard syllable={syllable} />)}
                </div>
            </div>
        );
    }
}

export default Learn;