function isEmpty(obj) {
      for (let key in obj){
          if (obj[key]){
              return false;
          }
            }
    return true;
    }
obj={};
alert(isEmpty(obj));

obj="7";
alert (isEmpty(obj));