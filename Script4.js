//  4. Arrays (10 Question)
 //    31.  Create an array of your top 5 faurite movies and log it.
        var arr=["a","b","c","d","e","f"];
        arr.forEach(function(value){
            console.log(value); //Output:  a ,b ,c,d,e,f
        })
//      32. Find and log the second element of an array.
           var ar=[10,20,30,40];
           console.log(ar[1]); //Output: 20

//      33. Add two new elements to the start of an array using  .unshift().
           var aarr=[1,2,3,4,5];
           aarr.unshift(0);
           aarr.unshift(-1);
           console.log(aarr); // Output:-1 0 1 2 3 4 5 

//      34. Remove the last element of the array and log the updated array.
          aarr.pop();
          console.log(aarr);

//      35. Use .slice() to extract the first three elements of an array.
            var a =[1,2,3,4,5];
            console.log(a.slice(0,3));

//      36. Find the index of a specific element in an array
             var bb=[1,2,3,4,5];
            console.log(bb.indexOf(4));
             console.log(bb); 

//      37. Check if a value  exist in an array using  .includes().
            console.log(bb.includes(12));  // False
            console.log(bb.includes(4));   // True

//      38. Combine two arrays [1,2] and [3,4] using .concat().
            var ar1=[1,2,3];
            var ar2=[4,5,6,7];
            console.log(ar1.concat(ar2));

            console.log("Solution of 39 Question is given below")

//      39. Sort an array of numbers [5,2,9,1] in ascending order.
            var  arr =[11,24,35,5,4]; // bubble sort

           for (var j=0;j<arr.length-1;j++){

            for(var i=0;i< arr.length -j -1;i++){
                if(arr[i]>arr[i+1]){
                  var temp=arr[i];
                  arr[i]=arr[i+1];
                  arr[i+1]=temp;
  
                }
              }
           }
        console.log(arr);
    
        console.log("Ansewr of Question 40 ");
//      40. Write a program that creates a copy of an array without mutating the original.
            
            var arr3=[11,24,36,7,8];
            var arr4=[];

            arr3.forEach(function(value){
                arr4.push(value);
            })

            console.log(arr4);
console.log("Jai Bharat");

