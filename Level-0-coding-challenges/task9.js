function removeLastComma(str){
    const lastIndex = str.lastIndexOf(" ,");               // function to remove the last comma
    const noComma = str.substring(0,lastIndex);
    return noComma;
}

function checkForVowels(text){
    let vowels = " "
   const checker = ['a','e','i','o','u'];     
   for (let char of text.toLowerCase()){
       if (checker.includes(char)){
           if(vowels.includes(char)){
               continue;                       //if the vowel is already in char pass do not repeat
           }else{
           vowels += char + " ,"
           }
       }
   }
  
   console.log("Vowels: " + removeLastComma(vowels));
 }

