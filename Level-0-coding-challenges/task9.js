function removeLastComma(str){
    let lastIndex = str.lastIndexOf(" ,");               //removing the last comma
    let noComma = str.substring(0,lastIndex);
    return noComma;
}

function checkForVowels(text){
    let vowels = " "
   const checker = ['a','e','i','o','u'];     //checking for vowels in a string 
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

