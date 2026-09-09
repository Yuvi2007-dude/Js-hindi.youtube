const accountId = 132444
let accountEmail = "rauanka@gmail.com"
var accountpassword= "1234445"
let accountCity = "Jaipur"
let accountstate;

// accountId = 2 not allowed because accountId is a constant and cannot be reassigned.

accountEmail = "hc@hc.com"
accountPassword = "2121112"
accountCity = "Mumbai"

console.log(accountId);
 
// prefer not to use var becoz of issue in block scope & functional scope  



console.table([accountId, accountEmail, accountPassword, accountCity,accountstate])