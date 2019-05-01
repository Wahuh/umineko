import { observable, computed, action } from "mobx";
import hiragana from "../data/hiragana";
import katakana from "../data/katakana";

const lists = {
    katakana,
    hiragana
}

const categories = {
    katakana: ["all", "monographs", "diagraphs", "diacritics"],
    hiragana: ["all", "monographs", "diagraphs", "diacritics"]
}

class SyllabaryStore {
    @observable syllabary = null;
    @observable filter = "all";

    @computed get categories() {
        return categories[this.syllabary];
    }

    @computed get syllables() {
        console.log(this.syllabary, this.filter)
        return this[this.filter];
    }

    @computed get all() {
        return lists[this.syllabary];
    }
    @computed get monographs() {
        return lists[this.syllabary].filter(({ category }) => category === "monograph");
    }

    @computed get diagraphs() {
        return lists[this.syllabary].filter(({ category }) => category === "diagraph");
    }

    @computed get diacritics() {
        return lists[this.syllabary].filter(({ category }) => category === "diacritic");
    }

    @action changeSyllabary = syllabary => this.syllabary = syllabary
    @action changeFilter = filter => {this.filter = filter; console.log(this.filter);}
 }

export default new SyllabaryStore();