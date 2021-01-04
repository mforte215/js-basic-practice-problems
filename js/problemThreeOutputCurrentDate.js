let date = new Date();

let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

if (month < 10) {
    month = '0' + month;
}

if (day < 10) {
    day = '0' + day;
}

let firstFormat = month + '/' + day + '/' + year;
let secondFormat = month + '-' + day + '-' + year;
let thirdFormat = day + '/' + month + '/' + year; 
let fourthFormat = day + '-' + month + '-' + year;

document.getElementById("firstFormat").innerHTML = firstFormat;
document.getElementById("secondFormat").innerHTML = secondFormat;
document.getElementById("thirdFormat").innerHTML = thirdFormat;
document.getElementById("fourthFormat").innerHTML = fourthFormat;