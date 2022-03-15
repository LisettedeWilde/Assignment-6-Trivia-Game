import { BASE_URL_QUESTIONS } from '.';

// GET: get array of questions
export function getQuestions(nrOfQuestions, category, difficulty, type) {
    // nrOfQuestions: number
    // category: number
    // difficulty: {Easy, Medium, Hard}
    // type: {multiple, boolean}
    fetch(`${BASE_URL_QUESTIONS}amount=${nrOfQuestions}&category=${category}&difficulty=${difficulty}&type=${type}`)
    .then(response => response.json())
    .then(results => {
        // results will be an array of questions
    })
    .catch(error => {

    })
}