// 1.Write a function to generate the first n numbers in the Fibonacci sequence

// let n = 10;
// let Fibonacci =[];
// if (n>0){
//     Fibonacci.push(0);
// }
// if (n>1){
//     Fibonacci.push(1);
// }
// for (i=2; i<n; i++){
//     let a = Fibonacci[i-1] + Fibonacci[i-2];
//     Fibonacci.push(a);
// }
// console.log(Fibonacci)


//2.Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// let num = [2,5,3,7,10,4,9];
// let target = 8;
// for (let i=0 ;i<num.length; i++){
//     for (let j=i+1; j<num.length; j++){
//         if (num[i]+num[j] === target){
//             console.log(i,j);
//             break;
//         }
//     }
// }



//7.Find the kth largest element in an unsorted array.
// let num = [2,5,3,7,10,4,9];
// let k = 2;
// for (let i=0; i<num.length; i++){
//     for (let j=i+1; j<num.length; j++){
//         if (num[i] < num[j]){
//             let temp = num[i];
//             num[i] = num[j];
//             num[j] = temp;
//         }
//     }
// }
// let kth_largest =num[k-1];
// console.log(kth_largest);


//10.Write a function to check if a given string is a palindrome.
// let str = "nayan";
// let rev ="";
// for (let i = str.length-1; i>=0; i--){
//     rev += str[i];
// }
// if (str === rev){
//     console.log("Yes, it is palindrom");
// }
// else{
//     console.log("No it is not palindrom");
// }







