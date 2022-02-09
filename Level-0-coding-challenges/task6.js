function maximum(num1,num2,num3){
    let max;
    if(num1 >= num2 && num1 >= num3){          //comparing num1 to num2 and num3
         max = num1;
    }else if(num2 >= num1 && num2 >= num3){     // comparing num2 to num1 and num3
        max =num2;
    }else {
        max = num3;
    }
    
  return max;
}
