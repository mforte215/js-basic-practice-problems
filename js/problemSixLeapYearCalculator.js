
const calculateLeapYear = () => {

    let enteredValue = document.getElementById("textInput").value;
    let isLeapYear = '';

    if(!isNaN(Number(enteredValue))) {
        if((enteredValue % 4) === 0) {
            console.log('Number is divisable by 4');
            if((enteredValue % 100) === 0) {
                console.log('Number is a turn of the century, not good unless 400 divisable');
                if((enteredValue % 400) === 0) {
                    console.log('Number is divisable by 400, return true');
                    isLeapYear =  enteredValue + ' is a Leap Year';
                }
                else{
                    console.log('Regular century, not divsable by 4');
                    isLeapYear =  enteredValue + ' is not a Leap Year';
                }
            }
            else {
                console.log('Regular leap year, return true');
                isLeapYear =  enteredValue + ' is a Leap Year';
            }
        }
    else {
        console.log('Not a leap year');
        isLeapYear =  enteredValue + ' is not a Leap Year';
    }
    }
    else {
        isLeapYear = 'This isnt working';
    }

    document.getElementById("leapYearLabel").innerHTML = isLeapYear;

}

