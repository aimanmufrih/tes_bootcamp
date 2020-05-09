function usernameValidity(username){
  let pola = /\W/; 
  return pola.test(username)};

console.log(usernameValidity("john.smith"));

function passwordValidity(pass){
  let pola = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/; //https://stackoverflow.com/questions/7684815/regex-pattern-to-match-at-least-1-number-and-1-character-in-a-string
  return pola.test(pass)};

console.log(passwordValidity("aij1lkhnlh"));