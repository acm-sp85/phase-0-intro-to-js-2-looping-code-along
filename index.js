function writeCards(namesArray,event){
    const newArray= [];
    for (let i=0 ;i< namesArray.length ; i++){
        newArray[i] = `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`;
        
        console.log(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
    }
    return newArray;
}

// writeCards(["Ada", "Brendan", "Ali"], "birthday"); 

function countDown(integer){
    let i = 0;
    while (i<=integer){
        console.log(i);
        i++;
    }

}