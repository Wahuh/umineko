import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import hiragana from "./data/hiragana";

console.log(hiragana.allIds.length);
console.log(Object.keys(hiragana.byId).length);
for (let i=0; i<hiragana.allIds.length; i++) {
    if (hiragana.byId.hasOwnProperty(hiragana.allIds[i])) {
        if (hiragana.byId[hiragana.allIds[i]].hasOwnProperty("type")) {
            console.log("type");
        } else {
            console.log(hiragana.allIds[i]);
        }
    } else {
        console.log(hiragana.allIds[i])
    }
}


ReactDOM.render(<App />, document.getElementById("root"));