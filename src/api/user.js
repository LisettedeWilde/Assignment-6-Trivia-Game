import { BASE_URL, API_KEY } from ".";

// GET: get user by username from api
export function getUser(username) {
    fetch(`${BASE_URL}/trivia?username=${username}`)
    .then(response => response.json())
    .then(results => {
        // results will be an array of users that match the username of mega-mind.
    })
    .catch(error => {

    })
}

// POST : create a new user
export function createUser(username) {
  const config = {
    method: "POST",
    headers: {
      "X-API-Key": API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "the-trivia-master",
      highScore: 0,
    }),
  };

  fetch(`${BASE_URL}/trivia`, config)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Could not create new user");
      }
      return response.json();
    })
    .then((newUser) => {
      // newUser is the new user with an id
    })
    .catch((error) => {
      
    });
}

// PATCH: update a users highscore by userId
export function updateUser(userId, score) { // check if current score is higher than stored high score
    const config = {
        method: 'PATCH', // NB: Set method to PATCH
        headers: {
            'X-API-Key': API_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Provide new highScore to add to user with id 1
            highScore: 100  
        })
    }

    fetch(`${BASE_URL}/trivia/${userId}`, config)
    .then(response => {
        if (!response.ok) {
            throw new Error('Could not update high score')
        }
        return response.json()
    })
    .then(updateUser => {
        // updatedUser is the user with the Patched data
    })
    .catch(error => {
        return [error.message, null]
    })
}