const accId = 16
let accEmail = "Rohit@google.com"
var accPass = "123"
accCity = "Jaipur"

//accId = 14    NOT ALLOWED
console.log(accId)
/*prefer not to use var
bcoz of issue in bloack and functional scope
*/
accEmail = "Rohit@Yahoo.com"
accPass = "321"
accCity = "Mumbai"

let accState = "WB"

//For printing all data at a time
console.log([accId, accEmail, accPass,accCity, accState])