import { observable, action } from "mobx";
import hiragana from "../data/hiragana";

class DataStore {
    @observable hiragana = hiragana;
    
}

export default new DataStore();