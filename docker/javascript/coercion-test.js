/* isValidName 

- must be a string
- must be non-empty
- must contain non-whitespaces of at least 3 characters
*/
function isValidName(name){
    var data = String(name).trim();
    return data === name && data.length>=2
}
   
/**
 * hoursAttended (attended, length)
 * 
 * -either parameter may only be a string or number
 * - both must be treated as numbers
 * - both numbers must be 0 or higher
 *  - both numbers must be whole numbers
 * -  'attended' must be less than or equal to 'length'
 */

 function hoursAttended(x,y){

    var dataX = Number(x);
    var dataY = Number(y);

    if(isItNaN(dataX) || isItNaN(dataY)){
        return false;
    }

    return (isValid(x) && isValid(y) &&Number.isInteger(dataX) && Number.isInteger(dataY) &&dataX>=0 && dataY >=0  && dataX<=dataY);
    

    function isItNaN(x){
        return x!==x;
    }

    function isValid(value){
        return ((typeof value === 'string' && value.trim() != "") || typeof value === 'number')
    }
 }



 // tests:
console.log(isValidName("Frank") === true);
console.log(hoursAttended(6,10) === true);
console.log(hoursAttended(6,"10") === true);
console.log(hoursAttended("6",10) === true);
console.log(hoursAttended("6","10") === true);

console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);
console.log(hoursAttended("",6) === false);
console.log(hoursAttended(6,"") === false);
console.log(hoursAttended("","") === false);
console.log(hoursAttended("foo",6) === false);
console.log(hoursAttended(6,"foo") === false);
console.log(hoursAttended("foo","bar") === false);
console.log(hoursAttended(null,null) === false);
console.log(hoursAttended(null,undefined) === false);
console.log(hoursAttended(undefined,null) === false);
console.log(hoursAttended(undefined,undefined) === false);
console.log(hoursAttended(false,false) === false);
console.log(hoursAttended(false,true) === false);
console.log(hoursAttended(true,false) === false);
console.log(hoursAttended(true,true) === false);
console.log(hoursAttended(10,6) === false);
console.log(hoursAttended(10,"6") === false);
console.log(hoursAttended("10",6) === false);
console.log(hoursAttended("10","6") === false);
console.log(hoursAttended(6,10.1) === false);
console.log(hoursAttended(6.1,10) === false);
console.log(hoursAttended(6,"10.1") === false);
console.log(hoursAttended("6.1",10) === false);
console.log(hoursAttended("6.1","10.1") === false);