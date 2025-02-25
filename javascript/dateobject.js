let a = new Date();
console.log(a);
console.log(typeof a);

let b;
b = a.getDay();         // Gets the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
b = a.getDate();        // Gets the current day of the month (1-31)
b = a.getMonth();       // Gets the current month (0 = January, 1 = February, ..., 11 = December)
b = a.getFullYear();    // Gets the current year (e.g., 2025)
b = a.getTime();        // Gets the timestamp (milliseconds since January 1, 1970)
b = a.getHours();       // Gets the current hour (0-23)
b = a.getMinutes();     // Gets the current minutes (0-59)
b = a.getSeconds();     // Gets the current seconds (0-59)
b = a.getMilliseconds();// Gets the current milliseconds (0-999)

let myDate = new Date('2/2/1990 20:12:40');

b = myDate.setDate(14);      // Sets the day of the month to 14
b = myDate.setMonth(0);      // Sets the month to January (0-based index)
b = myDate.setFullYear(2040);// Sets the year to 2040
b = myDate.setMinutes(12);   // Sets the minutes to 12
b = myDate.setSeconds(30);   // Sets the seconds to 30
console.log(myDate);
