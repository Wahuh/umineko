import React, { Component } from "react";
import List from '@material-ui/core/List';
import MenuItem from "./MenuItem";
import Divider from "@material-ui/core/Divider";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import { Link } from "react-router-dom";

const MenuList = (props) => {
    const listData = {
        test: {
            title: "Test",
            subtitles: [
                {
                    title: "Hiragana",
                    path: "/test/hiragana"
                }, 

                {
                    title: "Katakana",
                    path: "/test/Katakana"
                }
            ],
        },

        learn: {
            title: "Learn",
            subtitles: [
                {
                    title: "Hiragana",
                    path: "/test/hiragana"
                }, 

                {
                    title: "Katakana",
                    path: "/test/Katakana"
                }
            ],
        }
    }

    return (
        <List>
            <MenuItem title={listData.test.title} subtitles={listData.test.subtitles} />
            <MenuItem title={listData.learn.title} subtitles={listData.learn.subtitles} />
        </List>
    );
}

export default MenuList;