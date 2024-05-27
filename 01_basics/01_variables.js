const accountId=455523
let accountEmail="mithilesh@google.com"
var accountPassword="12345"
accountCity="Patna"
let accountState;

// accountId=987456  not allowed
console.log(accountId);

accountEmail="mithi@mithi.com"
accountPassword="21212121"
accountCity="Bengaluru"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
Prefer not use var 
bacause of issue of Block scope and functional scope
*/

