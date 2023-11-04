let arr = [3, 8, 2, 5, 4, 10, 7, 6];
let odd = 0;
let even = 0;
for (let i = 0; i <= arr.length; i++) {
  if (i % 2 === 0) {
    even += i;
  } else {
    odd += i;
  }
}

console.log("ODD: ", odd);
console.log("EVEN: ", even);




// // satk3
// let arr = [3, 8, 2, 5, 4, 10, 7, 6];
// let max=arr[0];
// for (let i=1; i<arr.length; i++){
//   if(arr[i]>max){
//     max=arr[i];
//   }
// }console.log("MAX" , max);

