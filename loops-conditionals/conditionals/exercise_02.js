/* 
   Spot the bug 🐞
   Should print: "Most places consider you an adult."... but it doesn't, why?
    
   Add a comment explaining what is happenning and how to fix it
*/

const age = 20;

if (age < 3) {
  console.log("You're just a baby!");
  return;
}
if (age >= 3 && age < 13) {
  console.log("You are in elementary school, kid.");
  return;
}
if (age >= 13 && age < 18) {
  console.log("Nice, you're a teenager!");
  return;
}
if (age >= 18) {
  console.log("Most places consider you an adult.");
  return;
}

console.log("What? How did this happen!?");

/* 
The problem with the original code is that the conditions were overlapping, 
which caused the program to exit too early (because of the "return").

For example, the condition "if (age >= 3)" always gets triggered for any age 3 or older, 
and that prevents the program from checking the other conditions.

To fix it, I made the conditions more specific so that each age group (kid, teenager, adult) has its own clear range. 
*/