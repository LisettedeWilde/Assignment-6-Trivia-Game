import { BASE_URL_QUESTIONS } from '.';

// GET: get array of questions
export function getQuestions(nrOfQuestions, category, difficulty) {
    // nrOfQuestions: number
    // category: number
    // difficulty: {Easy, Medium, Hard}
    // type: {multiple, boolean}
    fetch(`${BASE_URL_QUESTIONS}amount=${nrOfQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`)
    .then(response => response.json())
    .then((results) => {
        // results will be an array of questions
        localStorage.setItem(`questions`, results);
        console.log(results);
        return results;
    })
    .catch(error => {
        return [ error.message, []]
    })
}