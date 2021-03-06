// // Code your solutions in this file
// for (let age = 30; age<40 ; age++){
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
// }


const gifts =['oso de peluche','drone','GIJOE'];
const messageArray = [];



// function wrapGifts(gifts){
//     for (let i=0 ; i< gifts.length ; i++){

//         console.log(`Wrapped ${gifts[i]} and added a bow!`);

//     }
//     return gifts;
// }

// wrapGifts(gifts);

function writeCards(array,event){
    for (let i=0 ; i < array.length ; i++){
        debugger;
        // console.log(`Thank you ${array[i]}, for the wonderful ${event} gift!`);
        messageArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return messageArray;

}

function countDown(x){
    
    while (x >= 0){
        console.log(x);
        x--;
    }
}

