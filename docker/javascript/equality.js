/**
 * findAll(..) function that searches an array with all coercive matches.
 * 
 * - exact matches (Object.is)
 * - string ( except "" or white-spaces only ) can match numbers.
 * numbers (except 'NaN', and +/- Infinity ) can match strings (watch for -0)
 * null and undefined are equal
 * booleans can only match booleans
 * Objects only match the exact same object.
 */
// TODO: write `findAll(..)`
function findAll(value,data){

    var result =[];
    console.log(value);

    if(typeof value == 'boolean'){

        data.forEach(x=>{
            var xtype = typeof x;
            if(xtype == 'boolean' && x == value){
                    result.push(x);
            }
        });
    }else if(typeof value == 'string'){

        data.forEach(x=>{
            if(x == value && String(x).trim().length>0){
                    result.push(x);
            }
        });

    }else if(typeof value == 'number'){

        data.forEach(x=>{
            if(!isNaN(x) && !isInfinity(x) && x == value){
                result.push(x);
            }
        })

    }else if(value == null){
       
        data.forEach(x=>{
            console.log(x);
            if(x == value){
                    result.push(x);
            }
        });
    }else if(typeof value == 'object'){

        data.forEach(x=>{
            if(x === value){
                result.push(x);
            }
        });
    }

    function isInfinity(value){
       return  (value == 0 && ((1/value) == -Infinity || (1/value) == Infinity ));
    }
    function isNaN(x){
        return x != x
    }

    return result;
}

function findAll(match,values){
    var res =[];

  //  console.log(values);

    function isInfinity(value){
        return  (value == 0 && ((1/value) == -Infinity || (1/value) == Infinity ));
     }
     function isNaN(x){
         return x != x
     }

    values.forEach(data=>{
//console.log(Object.is(match,data))
        if(Object.is(match,data)){
            res.push(data);
        }else if(match == null && data == null){
           // console.log('xxx')
            res.push(data);
        }else if(typeof match == 'boolean' && typeof data == 'boolean'){
            if(match == data){
                res.push(data);
            }
        }else if(typeof match == 'string' && match.trim()!="" && typeof data == 'number' && match == data && !Object.is(data,-0) ){
            res.push(data);
        }else if(typeof match == 'number' && typeof data =='string' && !isNaN(match) && !Object.is(match,Infinity) &&!Object.is(match,-Infinity) && !Object.is(match,-0) && data.trim()!=""){
            if( match == data){
                res.push(data);
            }
        }
    });
    return res;
}

// tests:
var myObj = { a: 2 };

var values = [
	null, undefined, -0, 0, 13, 42, NaN, -Infinity, Infinity,
	"", "0", "42", "42hello", "true", "NaN", true, false, myObj
];

console.log(setsMatch(findAll(null,values),[null,undefined]) === true);
console.log(setsMatch(findAll(undefined,values),[null,undefined]) === true);
console.log(setsMatch(findAll(0,values),[0,"0"]) === true);
console.log(setsMatch(findAll(-0,values),[-0]) === true);
console.log(setsMatch(findAll(13,values),[13]) === true);
console.log(setsMatch(findAll(42,values),[42,"42"]) === true);
console.log(setsMatch(findAll(NaN,values),[NaN]) === true);
console.log(setsMatch(findAll(-Infinity,values),[-Infinity]) === true);
console.log(setsMatch(findAll(Infinity,values),[Infinity]) === true);
console.log(setsMatch(findAll("",values),[""]) === true);
console.log(setsMatch(findAll("0",values),[0,"0"]) === true);
console.log(setsMatch(findAll("42",values),[42,"42"]) === true);
console.log(setsMatch(findAll("42hello",values),["42hello"]) === true);
console.log(setsMatch(findAll("true",values),["true"]) === true);
console.log(setsMatch(findAll(true,values),[true]) === true);
console.log(setsMatch(findAll(false,values),[false]) === true);
console.log(setsMatch(findAll(myObj,values),[myObj]) === true);

console.log(setsMatch(findAll(null,values),[null,0]) === false);
console.log(setsMatch(findAll(undefined,values),[NaN,0]) === false);
console.log(setsMatch(findAll(0,values),[0,-0]) === false);
console.log(setsMatch(findAll(42,values),[42,"42hello"]) === false);
console.log(setsMatch(findAll(25,values),[25]) === false);
console.log(setsMatch(findAll(Infinity,values),[Infinity,-Infinity]) === false);
console.log(setsMatch(findAll("",values),["",0]) === false);
console.log(setsMatch(findAll("false",values),[false]) === false);
console.log(setsMatch(findAll(true,values),[true,"true"]) === false);
console.log(setsMatch(findAll(true,values),[true,1]) === false);
console.log(setsMatch(findAll(false,values),[false,0]) === false);

// ***************************

function setsMatch(arr1,arr2) {
	if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length == arr2.length) {
		for (let v of arr1) {
			if (!arr2.includes(v)) return false;
		}
		return true;
	}
	return false;
}
