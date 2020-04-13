var _ ={};

_.map = function (listObj,callbackFunc){
var data;
    if(Array.isArray(listObj)){
        data=[];
        // for(let i=0;i<listObj.length;i++){
        //     data.push(callbackFunc(listObj[i],i,listObj));
        // }
    _.each(listObj,function(value,index,list){
        data.push(callbackFunc(value,index,list));
    })
    }else{

    }
    return data;
};

_.each = function (listObj,callbackFunc){
    
        if(Array.isArray(listObj)){  
            for(let i=0;i<listObj.length;i++){
                callbackFunc(listObj[i],i,listObj);
            }
        }else{
    
        }
};

_.filter =function(listObj,callbackFunc){

    var data;
    if(Array.isArray(listObj)){
        data = []

        _.each(listObj,function(value,index,list){
            if(callbackFunc(value,index,list)){
                data.push(value);
            }
        });
    }  
    return data;
}


console.log(_.map(['candlestick','lead pipe','revolver'],function(value,index,list){return 'broken'+value}));

const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];

console.log(_.filter(videoData,function(value, index, listObj){
    return value.present;
}));

//_.filter(videoData,(item,index,listObj)=> item.present);

const data = _.filter(videoData,(item,index,listObj)=> {return item.present;});
const arr = _.map(data,(item,index,listObj)=>item.name);
console.log(arr);


// Declare ES5 Functions

var increment = function(n){ return n+1};
var square = function(n){ return n*n};
var doMath = function(n,func){return func(n)};

//examples:
doMath(5,increment);
doMath(10,square);

//Convert functions to ES6

const increment = n=>n+1;
const square =n => n*n;
const doMath =(n,func)=>func(n);


// implement reduce function

/**
 * Reduce takes collection, function, accumulator
 * returns single values
 */

 _.reduce = (collection, callbackfunc, accumulator)=>{

      if(Array.isArray(collection)){
          let memo = accumulator;
        _.each(collection,(value,index,list)=>{
           memo = callbackfunc(value,memo);
        });
         
        return memo;
      }else{

      }
 }


 _.reduce([1,2,3],(value,sum)=>value+sum,0); 