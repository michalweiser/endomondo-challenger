const email = require('./login').email;
const password = require('./login').password;

var authenticate = require('endomondo-unofficial-api').authenticate
var workouts = require('endomondo-unofficial-api').workouts

let listWorkouts = (result) => {
    workouts({authToken: result.authToken})
        .then((result) => { console.log(result) })
        .catch((result) => console.log(result))
}


authenticate({
    email,
    password
})
    .then(listWorkouts)
    .catch((result) => console.log(result))
 
