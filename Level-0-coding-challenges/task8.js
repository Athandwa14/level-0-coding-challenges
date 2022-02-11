function secAndMin(anyNumber){
    const hours = Math.floor(anyNumber/60);       // calculating number of hours only without a remainder 
                  
    const minutes = anyNumber % 60;           // calculating the number of minutes which is a remainer of hours

    if(hours === 1){
        console.log(hours + " hour and " + minutes + " minutes");
    }else if(minutes === 1){
        console.log(hours + " hours and " + minutes + " minute");
    }else if(hours ===1 && minutes === 1){
        console.log(hours + " hour and " + minutes + " minute" )
    }else{
        console.log(hours + " hours and " + minutes + " minutes")
    }
}


