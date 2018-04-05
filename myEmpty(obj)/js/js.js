function isEmpty(obj) {
      for (let key in obj){
               return false;
            }
       return true;
    }

let obj={};
alert(isEmpty(obj));

obj[num]= "7";
alert (isEmpty(obj[num]));