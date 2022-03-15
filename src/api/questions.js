import { BASE_URL_QUESTIONS } from '.';

// GET: get array of questions
// export async function getQuestions(nrOfQuestions, category, difficulty, type) {
    export async function getQuestions() {
    // nrOfQuestions: number
    // category: number
    // difficulty: {Easy, Medium, Hard}
    // type: {multiple, boolean}
    // fetch(`${BASE_URL_QUESTIONS}amount=${nrOfQuestions}&category=${category}&difficulty=${difficulty}&type=${type}`)
    // fetch(`${BASE_URL_QUESTIONS}amount=10&category=23&difficulty=easy&type=boolean`)
    // .then(response => response.json())
    // .then(results => {
    //     results will be an array of questions
    //     return [ null, data ]
    // })
    // .catch(error => {
    //     return [ error.message, []]
    // })

    try {
        // const response = await fetch(`${BASE_URL_QUESTIONS}amount=${nrOfQuestions}&category=${category}&difficulty=${difficulty}&type=${type}`)
        const response = await fetch(`${BASE_URL_QUESTIONS}amount=10&category=23&difficulty=easy&type=boolean`)

        if (!response.ok) {
            throw new Error("Could not find questions")
        }

        const { success, data, error = "Could not fetch questions"} = await response.json()

        if (!success) {
            throw new Error(error)
        }

        return [ null, data ]
    }
    catch(e) {
        return [ e.message, []]
    }
}