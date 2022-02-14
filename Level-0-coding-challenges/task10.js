function removeLastComma(str){
  const lastIndex = str.lastIndexOf(" ,");        //function to remove the last comma
  const noComma = str.substring(0,lastIndex);
  return noComma;
}

function commonChar(str1,str2){
    let result = " "
    let str2 = str2.toLowerCase();
  for (let char of str1.toLowerCase()){
      if (str2.includes(char)){              
          if (result.includes(char)){
              continue;                      // pass if the character is already included in char
          }else{
            result += char + " ," ;
         
          }
         }
        }
          console.log("Common letters:" + removeLastComma(result));  
    }
    
     
 