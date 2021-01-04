
let date = new Date();


let dateString = date.toString();
let theDay = '';
firstLetter = dateString.charAt(0);
secondLetter = dateString.charAt(1);
thirdLetter = dateString.charAt(2);
theDay = firstLetter+secondLetter+thirdLetter;
console.log('The day is: ' + theDay);
console.log('theDay variables data type is:' + typeof(theDay));
let theHour = date.getHours();
let theMinute = date.getMinutes();
let theSecond = date.getSeconds();
let formattedDay = '';  
switch (theDay) {
    case 'Fri':
        formattedDay = 'Friday';    
        break;
    case 'Mon':
        formattedDay = 'Monday';
        break;
    case 'Tue':
        formattedDay = 'Tuesday';
        break;
    case 'Wed':
        formattedDay = 'Wednesday';
        break;
    case 'Thu':
        formattedDay = 'Thursday';
        break;
    case 'Sat':
        formattedDay = 'Saturday';
        break;
    case 'Sun':
        formattedDay = 'Sunday';
        break;
    default:
        formattedDay = 'Didnt work';
        break;
}

let formattedHours = '';

console.log('the hour: ' + theHour);

switch (theHour.toString()) {
    case '0':
        formattedHours = '12 AM'
        break;
    case '1':
        formattedHours = '1 AM'
        break;
    case '2':
        formattedHours = '2 AM'
        break;
    case '3':
        formattedHours = '3 AM'
        break;
    case '4':
        formattedHours = '4 AM'
        break;
    case '5':
        formattedHours = '5 AM'
        break;
    case '6':
        formattedHours = '6 AM'
        break;
    case '7':
        formattedHours = '7 AM'
        break;
    case '8':
        formattedHours = '8 AM'
        break;
    case '9':
        formattedHours = '9 AM'
        break;
    case '10':
        formattedHours = '10 AM'
        break;
    case '11':
        formattedHours = '11 AM'
        break;
    case '12':
        formattedHours = '12 PM'
        break;
    case '13':
        formattedHours = '1 PM'
        break;
    case '14':
        formattedHours = '2 PM'
        break;
    case '15':
        formattedHours = '3 PM'
        break;
    case '16':
        formattedHours = '4 PM'
        break;
    case '17':
        formattedHours = '5 PM'
        break;
    case '18':
        formattedHours = '6 PM'
        break;
    case '19':
        formattedHours = '7 PM'
        break;
    case '20':
        formattedHours = '8 PM'
        break;
    case '21':
        formattedHours = '9 PM'
        break;
    case '22':
        formattedHours = '10 PM'
        break;
    case '23':
        formattedHours = '11 PM'
        break;
    default:
        formattedHours = 'Didnt Work'
        break;
    
}



let time = formattedHours + ' : ' + theMinute + " : " + theSecond;
document.getElementById("date").innerHTML = 'Today is: ' + formattedDay + '.';
document.getElementById("time").innerHTML = 'Current time is: ' + time;