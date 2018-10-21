import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";

const AlphabetList = (props) => {
    return (
        <List>
            <ListItem button>
                <ListItemText primary="Hiragana" />
            </ListItem>
        </List>
    );
}

export default AlphabetList;