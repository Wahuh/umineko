import { computed, observable, action, reaction } from "mobx";
import hiragana from "../data/hiragana";
import * as constants from "../components/test/constants";

class TestStore {
    constructor() {
        reaction(
            () => this.test.status,
            status => {
                if (status === constants.IN_PROGRESS) {
                    this.generateQuestions();
                    this.nextQuestion();
                } 
            }
        );
    }

    @observable hiragana = hiragana;

    @observable options = {
        gojuon: true,
        dakuon: true,
        handakuon: true,
        yoon: true,
        //sokuon: true,
        additionalLetters: false,
        questionCount: 1,
    }

    @computed get maxQuestions() {
        let maxQuestions = 0;
        if (this.options.gojuon) {
            maxQuestions += 46;
        }

        if (this.options.dakuon) {
            maxQuestions += 20;
        }

        if (this.options.handakuon) {
            maxQuestions += 5;
        }

        if (this.options.yoon) {
            maxQuestions += 36;
        }

        //if (this.options.sokuon) {
          //  maxQuestions += 1;
        //}

        if (this.options.additionalLetters) {
            maxQuestions += 3;
        }

        return maxQuestions
    }

    @action toggleOption(option) {
        this.options[option] = this.options[option] ? false : true;
    }
    
    @action setTestStatus(status) {
        this.test.status = status;
    }

    @action setQuestionCount(number) {
        if (number <= this.maxQuestions) {
            this.options.questionCount = number;
        } else {
            console.log(number);
        }
    }

    @action generateQuestions() {
        let questionCount = this.options.questionCount;
        let questionPool = this.questionPool.slice();
        let questions = [];

        function shuffle(arr) {
            arr.sort(function() { return 0.5 - Math.random() });
        }

        while(questions.length < questionCount) {
            shuffle(questionPool);
            questions.push(questionPool.pop());
        }

        this.test.questions = questions;
    }

    @computed get characters() {
        return hiragana.allIds.map(character => hiragana.byId[character]);
    }

    @computed get questionPool() {
        return this.characters.filter(character => this.options[character.type]);
    }

    @action nextQuestion() {

        if (this.test.currentQuestion) {
            this.test.completedQuestions.push(this.currentQuestion);
        }
        if (this.test.questions.length) {
            this.test.currentQuestion = this.test.questions.pop();
            console.log(this.test.currentQuestion);
        } else {
            this.setTestStatus(constants.COMPLETED);
        }
    }
    
    @action increaseScore() {
        this.test.score += 1;
    }

    @action correctQuestion() {
        this.test.currentQuestion["correct"] = true;
    }

    @action setReveal() {
        this.test.currentQuestion["reveal"] = true;
    }

    @observable test = {
        status: null,
        characters: [],
        questions: null,
        currentQuestion: null,
        score: 0,
        completedQuestions: [],
    }
}

export default new TestStore();