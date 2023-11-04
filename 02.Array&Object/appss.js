let arr = [3, 8, 5, 2, 7, 10, , 6];
arr.forEach((item,inde) => {
 if((inde%2)-1){
    console.log("Tek", item);
 }
});

arr.forEach((item,index) => {
if(index%2){
    console.log("Cut", item);
}
});


// // satk3
// let arr = [3, 8, 2, 5, 4, 10, 7, 6];
// let max=arr[0];
// for (let i=1; i<arr.length; i++){
//   if(arr[i]>max){
//     max=arr[i];
//   }
// }console.log("MAX" , max);
