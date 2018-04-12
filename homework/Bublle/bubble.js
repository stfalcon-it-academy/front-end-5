"use strict";
var data = [1, 2, 7, 10, 6, 9, 3, 8, 5, 4];
var dataL = data.length;
   function SortBublle(data){
       for(var i = dataL -1; i>0; i--){
            var counter=0;
            for(var j=0; j<i; j++){
                if(data[j]> data[j+1]){
                    var time = data[j];
                    data[j]=data[j+1];
                    data[j+1]=time;
                    counter++;
                }
            }
            if(counter===0){
                break;
            }
       }
       return data;
   }

   SortBublle(data);
   alert( 'Сортування методом "Бульбащки" - ' + data);
