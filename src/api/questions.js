import { BASE_URL_QUESTIONS } from '.';

// GET: get array of questions
export function getQuestions(url) {
    
    fetch(`${BASE_URL_QUESTIONS}${url}`)
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