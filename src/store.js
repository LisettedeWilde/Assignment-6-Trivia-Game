import { createStore } from "vuex";
//import { BASE_URL, API_KEY } from "./api/index.js";
import { getQuestions } from "./api/questions";

 const BASE_URL = "https://lw-noroff-api.herokuapp.com/";
 const API_KEY = "tOCLBMPb5U6zbvaXbW7PeA==";

const store =  createStore({
    state: {
        url: "",
        user:[],
        score: 0,
    },
    mutations: {
        setURL: (state, payload) => {
            state.url = payload;
        },
        setUser: (state, payload) => {
            state.user = payload;
        },
        setScore: (state, payload) => {
            state.score =  payload;
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
        },

        //get user
        async getUser({commit, dispatch}, username) {
            
            fetch(`${BASE_URL}trivia?username=${username}`)
            .then(response => response.json())
            .then((results) => {
                // results will be an array of users that match the username of mega-mind.
                if (results.length == 0) {
                  dispatch('createUser', username);
                } else {
                  commit('setUser', results);
                }
            })
            .catch(error => {
        
            })
        },

        //if user does not exist create user
        async createUser({commit}, username) {
            const config = {
              method: "POST",
              headers: {
                "X-API-Key": API_KEY,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                username: username,
                highScore: 0,
              }),
            };
          
            fetch(`${BASE_URL}trivia`, config)
              .then((response) => {
                if (!response.ok) {
                  throw new Error("Could not create new user");
                }
                return response.json();
              })
              .then((newUser) => {
                // newUser is the new user with an id
                commit('setUser', newUser);
              })
              .catch((error) => {
                
              });
          }
    }
})

export default store;