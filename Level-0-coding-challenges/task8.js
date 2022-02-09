function secAndMin(anyNumber){
    let hours = Math.floor(anyNumber/60);       // calculating number of hours only without a remainder 
                  
    let minutes = anyNumber % 60;           // calculating the number of minutes which is a remainer of hours

    console.log(anyNumber + " is " + hours + " hours and " + minutes + " minutes");
}