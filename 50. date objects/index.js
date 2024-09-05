/*
Date objects = Objects that contain values that represent dates and times. These date objects can be changed and formatted
*/

//Date(year, month, day, hour, minute, second, ms)

const date = new Date();

// const date = new Date(2001,0,15,14,30,30,20);

// const date = new Date("2001-01-02T12:00:00");

// const date = new Date(0); //Time after the starting time

// const date = new Date();

// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hour = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();
// const dayOfWeek = date.getDay();

// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minutes);
// console.log(seconds);
// console.log(dayOfWeek);

// date.setFullYear(2023);
// date.setMonth(1);
// date.setDate(15);
// date.setHours(2);
// date.setMinutes(5);
// date.setSeconds(30);

// console.log(date);


//Date comparison
const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if (date2 > date1) {
  console.log("Happy New Year!");
}

