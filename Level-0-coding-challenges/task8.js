function secAndMin(anyNumber){
    const hours = Math.floor(anyNumber/60);         
                  
    const minutes = anyNumber % 60;         

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


