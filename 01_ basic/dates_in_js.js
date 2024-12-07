// Dates 

// Create the date instance { practice Date code 20-11-2024 }
let myDate = new Date();

// console.log(myDate);  // output 2024-11-20T05:56:46.872Z

// console.log(myDate.toUTCString()); // output Wed, 20 Nov 2024 06:05:02 GMT
// console.log(myDate.getDate()); // output 20
// console.log(myDate.getHours()); // output 11
// console.log(myDate.toTimeString()); //output 11:15:31 GMT+0500 (Pakistan Standard Time)
// console.log(myDate.toLocaleString()); // output 20/11/2024, 11:16:45
// console.log(myDate.toLocaleDateString()) //output 20/11/2024
// console.log(myDate.toJSON()); // output 2024-11-20T06:23:08.971Z
// console.log(myDate.getTimezoneOffset()); // output -300
// console.log(myDate.getFullYear()); // output 2024
// console.log(myDate.toISOString()); // output 2024-11-20T06:01:48.961Z
// console.log(myDate.toDateString()); // output Wed Nov 20 2024
// console.log(myDate.getTime()); // output 1732082439900

/////////////////////////////////////////////////////////////
// What is the date type
// console.log(typeof myDate); // output object [ date is the object]

//////////////////////////////////////////////////////

// let myCreateDate = new Date(2023, 0, 23);
// console.log(myCreateDate.toDateString()); // output Mon Jan 23 2023

/////////////////////////////////////////////////////////////////

// let myCreateDate1 = new Date(2023, 0, 23, 5, 6);
// let myCreateDate1 = new Date('2024-01-21'); // output 21/01/2024, 05:00:00
// let myCreateDate1 = new Date('01-14-2024'); // output 14/01/2021, 00:00:00
// console.log(myCreateDate1.toLocaleString()); // output 23/01/2023, 05:06:00

////////////////////////////////////////////////////////////////////

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);  // output 1732086273841
// console.log(myCreateDate1.getTime());// output 1705172400000

// console.log(Date.now()/1000); // output in milliseconds 1732086556.844
// console.log(Math.floor(Date.now()/1000)); // output in milliseconds 1732086649 without desimal value


//////////////////////////////////////////////////////////////////////////////////

let newDate = new Date();

newDate.toLocaleString('default', {
    weekday: 'long',
})

console.log(newDate)