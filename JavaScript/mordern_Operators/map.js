const person = new Map();

person.set("name", "Satyam");
person.set("age", 21);
person.set({city:"Bhopal"}, "Address Object");
person.set([1,2], "Array Key");

console.log(person.get("name")); 
console.log(person.size);

// Iterate
for (let [k, v] of person) {
  console.log(k, v);
}

// Check
console.log(person.has("age")); // true
 
// Delete
person.delete("age");


console.log(3 || undefined || null || 1 ||"satyam");
