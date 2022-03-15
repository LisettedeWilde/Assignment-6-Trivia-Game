import { createStore } from "vuex";
import { getQuestions } from "./api/questions";


export default createStore({
    state: {
        questions: []
    },
    mutations: {
        setQuestions: (state, questions) => {
            state.questions = questions
        }
    },
    actions: {
        async fetchAllQuestions({ commit }) {
            // API request
            const [error, questions ] = await getQuestions()

            // Return possible error
            if (error !== null) {
                return error
            }

            // Set the state
            commit("setQuestions", questions)

            return null //error
        }
    }
})