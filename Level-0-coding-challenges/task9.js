function removeLastComma(str){
    const lastIndex = str.lastIndexOf(" ,");               // function to remove the last comma
    const noComma = str.substring(0,lastIndex);
    return noComma;
}

function checkForVowels(text){
    let vowels = " "
   const checker = ['a','e','i','o','u'];     //an array of vowels to compare to a string to get vowell
   for (let char of text.toLowerCase()){
       if (checker.includes(char)){
           if(vowels.includes(char)){
               continue;
           }else{
           vowels += char + " ,"
           }
       }
   }
  
   console.log("Vowels: " + removeLastComma(vowels));
 }

