//javaScript me logical operators ( && and || )
// left side ka value check karte hi short-circuit (stop) kar dete hain
// agar result already decide ho jaye...to right side ka value check nhi karega---

//agar left side me ans mil jaaye to right side check nahi karega


//Short circuit wit (OR) ||----------------
// OR (||) returns the FIRST truthy value
// If no truthy found → returns last value     ------------


console.log("Satyam" || "Singh");           //truthy/truthy

console.log(0 || "Satyam");
console.log('' || "Satyam");
console.log(false || "Satyam");             //falsy / truthy
console.log(NaN || "Satyam");

console.log(1 || NaN);                      //truthy / falsy
console.log(0 || "" || null);     //All falsy

//Because OR stops (short-circuits) when it finds first truthy.

//if Api doesn't give a name then use default value
let username = "";
let users  = username || "Guest";
console.log(users);

//if age is missing -> default 18
const age = null;
console.log(age|| 18);
console.log(0 || false || undefined || null);




//Short circuit wit (AND) &&----------------
// AND (&&) returns the FIRST falsy value
// If no falsy found → returns last value

console.log("Satyam" && 21);     

console.log(0 && "Hello");
console.log(true && 5 && null && "React");

console.log(0 || 'satyam'&& `singh` && 1 );
console.log( 0 && "ram" || "shyam" && true );
console.log( false && 10 || 20 && 30 );
console.log( null || 0 && "ok" || "done" );

console.log( undefined && "Satyam" || 0 && "Singh" || "JS" );
console.log( true && 0 || false && "ok" && "end" );






