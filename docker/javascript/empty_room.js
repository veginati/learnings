//return the list of rooms in which noone is present
const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    }
];


const notInRoom = (suspect)=>{

    const emptyRooms =_.reduce(suspect.rooms, (room,memory)=>{
        if(room  === false) {
            memory.push(room);
        }
        return memory;
    },[]);
}

notInRooms = _.map(newDevelopment, notInRoom);



// Advanced Scope Closure:

const newClue1 = (name)=>{
    const length =name.length;
    
    return (weapon) =>{
    let clue = length + weapon.length;
    return !!(clue %1);
    };
    };

    const f1 = newClue1('Green');
    const f2 = newClue1('Blue');

//Note:    f1 & f2 have different copies of length;

//V2 Closure ES6 - returns objects with two functions.
const countClasses = ()=>{
    let n=0; //  parent scope 
    return { 
        count : ()=> n++,
        reset : ()=>n=0
    };
};

counter = countClasses(); // saving the state.
counter1 = countClasses(); // saving the state.

// Different state of parent scope for each instance.

// make timer()

const mT = () =>{
    let el =0;
        const stopW = () => el;
    const inc =() =>el++;
    setInterval(inc,1000);
    return stopW;
    };

    const  data = mT()

    data(); // returns time in seconds from the execution.