let stringToRotate = 'Forte Corp';
let arrayOfCharacters = stringToRotate.split("");


rotate = (slogan, numberOfRotations) => {
    let index = 1;
    while(index <= numberOfRotations)
    {
        slogan.unshift(slogan.pop());
        console.log('Rotate ' + index + ' steps to the right:');
        console.log(slogan);

        index++;
    }
    
    return slogan;
    }
   





}
rotate(arrayOfCharacters, 4);
    /*


        //Get current element
        //If first element set saved, if not, it doesn't need to be.
        console.log('Index: ' + index);

        if (index === 0) {
            slogan[index + 1] = firstCharacter;
            console.log('Setting the first character to the second');
        }
        else {
                    //Save next character

        slogan[index + 1] = savedCharacter
        console.log('Setting next character to the previously saved character which was: ' + savedCharacter);
        console.log(slogan);
        savedCharacter = slogan[index + 2];
        }
        

    }
    slogan[0] = lastCharacter;

    return slogan;
} 

*/





