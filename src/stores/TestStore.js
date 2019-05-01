import { observable, action, computed } from "mobx";
import hiragana from "../data/hiragana";
import katakana from "../data/katakana";
import { toJS } from 'mobx';
const questionSets = {
    hiragana,
    katakana
};

class TestStore {
    @observable mode = "";
    @observable questions = [];
    @observable results = {};
    @observable currentQuestionNumber = 0;

    @action changeMode = mode => this.mode = mode;

    @action start(options) {
        this.questions = questionSets[this.mode]
            .filter(({ category }) => options[category]);
        this.currentQuestionNumber = 0;
    }

    @computed get questionCount() {
        console.log(toJS(this.questions), "qa")
        return this.questions.length;
    }

    @action getNextQuestion(options) {
        this.currentQuestionNumber += 1;
        return this.currentQuestion;
    };

    @computed get currentQuestion() {
        return this.questions[this.currentQuestionNumber];
    }

    @action evaluateAnswer(answer) {
        // const roumaji = this.questions[this.currentQuestionNumber].roumaji;
        this.results[this.currentQuestionNumber] = answer;
    }
    
    @computed get score() {
        if (this.currentQuestionNumber == 0) return 0;
        return Object.entries(this.results)
            .reduce((acc, val) => {
                const [ index, answer ] = val;
                console.log(val, this.questions[index]);
                if (this.questions[index].kana === answer) {
                    return acc + 1
                }
            }, 0);
    }
}

export default new TestStore();