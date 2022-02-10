function removeLastComma(str){
  let lastIndex = str.lastIndexOf(" ,");               //function to remove the last comma
  let noComma = str.substring(0,lastIndex);
  return noComma;
}

function commonChar(str1,str2){
    let result = " "
    str2 = str2.toLowerCase();
  for (let char of str1.toLowerCase()){
      if (str2.includes(char)){              // compering characters of str1 to str2 and check for similarities
          if (result.includes(char)){
              continue;                      // pass if the character is already included in char
          }else{
            result += char + " ," ;
         
          }
         }
        }
          console.log("Common letters:" + removeLastComma(result));  
    }
    
     
 