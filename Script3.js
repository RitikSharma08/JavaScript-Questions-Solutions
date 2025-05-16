// Loops (10 Question)

// 21. Write a for loop to print numbers from 1 to 50.
   
     for( var i=1;i<=50;i++){
        console.log(i);
     }

// 22. Use a while loop to sum the numbers from 1 to 10.
   let num=1;
   let sum=0;
  while( num<=10){
   console.log(num);
   sum=num+sum;
   num++;
  }
  console.log("Total Sum from 1 to 10 is : "+sum);

// 23. Crate a for...of loop to log each character of the string " JavaScript".
  // for of loop character me lagta h.
   let str="JavaSCript";
   for(let chacha of str){
      console.log(chacha);
   }

// 24. Write a for loop that skips even the number between 1 and 20.
 for(var i=0;i<10;i++){
   console.log(2*i+1);
 } 

 console.log("Skip the even number");
 for(var i=1;i<20;i++){
   if(i%2 != 0){
      console.log(i);
   }
 }

 // 25. Use a do while loop to log numbers from 5 to 1.
  var n=5;
 do{
   console.log(n);
   n--;
 }while(n>0)
console.log("Saurabh shukla");

   // 26. Create a for loop that calculate the factorial of 5.
          
       //  Using While loop with fuction
   function factorial(no) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers";
    }
    
    let result = 1;
    let i = no;
    
    while (i > 1) {
        result *= i;
        i--;
    }
    
    return result;
}
   let no=5;
   console.log(`Factorial of ${no} is : ${factorial(no)} `);

   // without function
   let nu = 5; // Change this number to compute a different factorial
   let result = 1;
    i = nu;
   
   while (i > 1) {
       result *= i;
       i--;
   }
   
   console.log(`Factorial of ${nu} is: ${result}`);

   // 27. Write a nested loop to print a 3*3 grid  of number
         // 1 2 3
         // 4 5 6
         // 7 8 9
         var hold=1;
         for(var i=1;i<4;i++){
            var strg ="";
            for(var j=1;j<4;j++){
               strg += `${hold} `;
               hold++;
               }
               console.log(strg);
         }

     // 28. Use a for loop to reverse an array [1,2,3,4].
            
            // Printing the array in reverse.
            var arr =[1,2,3,4,5];
            for(var i=arr.length-1;i>=0;i--){
               console.log(arr[i]+" ");
            }

           console.log(arr);

           // Reverse the array 
             var arr=[10,20,30,40,50];
             for(var i=0;i< Math.floor(arr.length/2);i++){
                var temp =arr[i];
                arr[i]=arr[arr.length -1 - i];
                arr[arr.length - i -1]=temp;
             }
             console.log(arr);
     
     // 29. write a while loops that logs number from 1 to 100 divisible by 5.
             let number=1;
             while(number<=100){
               if(number%5==0){
                  console.log(number);
               }
                number++;
             }

     // 30. Use a for ... in loop to iterate  over an object and log its keys.
            var obj={
               name:"Ritik a software devloper",
               email: "abcd@gmail.com",
               age:25
            }
            for(let key in obj){
               console.log(key);
            }

   console.log("Harry");