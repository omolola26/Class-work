function amount(a){

    if(a === null || a === undefined){
  return("please input vailid number");
      } else if(a <= 5000){
   return 10
      } else if(a <= 50000){
         return 25
       } 
       return 50
       }
  
   alert(amount(5000));
   alert(amount(500000));
   alert(amount(5000000));