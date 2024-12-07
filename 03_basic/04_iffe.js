// Immediately Invocked Function Expression (IIFE)

// Simple Function
// function chai(){
//     console.log(`DB Connected`);
// }
// chai()

// IIFE for immediate execution and removal of global execution

// iife function  end on semicolan
// This is named iife like chai
(function chai() {
  console.log(`DB Connected`);
})();

// This is without named iife
((name) => {
  console.log(`DB Connected Two Statements ${name}`);
})("Adnan");
