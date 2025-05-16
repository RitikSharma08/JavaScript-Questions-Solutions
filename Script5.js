// 5. Fuction Practice Quesition(10)
//    41. Write a function to check if a number is even or odd.
    console.log("Enter a number : "); 
    var num=5;
   
        if(num%2==0){
        console.log("Even number");
    }
    else console.log("Odd number");

    // with creating a function

    function evod (value){
      if(value%2==0)return "even";
      else return "odd";
    }
    console.log(evod(15));


    // 42. Create a function to calculate the area of a circle with a given radius.
    function areaofCircle(radius){
        return Math.round(Math.PI *radius*radius);    
    }
    console.log(areaofCircle(12));
    
    //43. Write a function  that accepts an array and return the sum of its elements.
          function SumofArr(arr){
            var sum =0;
            arr.forEach (function(v){
              sum= sum + v;
            })
            return sum;
        }
        console.log(SumofArr([5,2,7,8,6,5,9,6]));

    //44. Create a function that checks if a string starts with a specific character.
          function checker(str,char){
            return str.startsWith(char); // str.startsWith is used to check the string is started with particular character or not.
          }   
          console.log(checker("Ritik","R"));

          // Optimal approach so confilct of lowercase and upper case not happen.

          function check(str,char){
            return str.toLowerCase().startsWith(char.toLowerCase());
          }
          console.log(check("sharma","S"));

      //45. Write a function to find the maximum of two numbers
           function maxnumber(a,b){
            if(a>b)return "a is greater";
            else return "b is greater";
           }
           console.log(maxnumber(10,50));

      // 46. Create a function that takes a number and return its factorial.
            function getFact(num){
                  let fct=1;
                  for(var i=1;i<=num;i++){
                    fct=i*fct;
                  }
                  return fct;
            }
            console.log(getFact(5));
        
        //47. Write a function that accept string and return its reverse.
             function abcd(str){
              return str.split("").reverse().join("");
             } 
             console.log(abcd("Company"));

            // Note: String me reverse method/Function nhi hota h.
            // For this operation we use split(" ") which make a string into array.
            // And now we reverse the Array and with join(" ") again array created in the string in reverse order.

         // 48. Create a function to find the largest number in an array.
              function bcd(arr){
                var max=0;
                for(var i=1;i<arr.length;i++){
                  if(arr[i]>arr[max]){
                    max=i;
                  }
                }
                return arr[max];
              }

              console.log(bcd([15,62,98,6,4,9,10]));

         //49. Write a function that combine string to Free- Fire for e.g..
               function Hind(str){
                return str.replaceAll(" ","-");
               }
               console.log(Hind("UP Delhi Cheenai Bhopal"));
        
          //50. Create a function that always print Jai Hind.
            function India(num){
              for(var i=0;i<num;i++){
                console.log("Jai Hind");
              }
            }
             India(5);