let number = [12,7,3,9,6,15,8];
// task1.1
// let newArr = number.flatMap((x) => x ** 2);
// console.log(newArr);
// tsk1.2
// let min=Math.min(...number)
// let max=Math.max(...number)

// let minIndex=number.indexOf(min);
// let maxIndex=number.indexOf (max);

// [number[minIndex],number[maxIndex]]=[number[maxIndex],number[minIndex]];
// console.log("yeni number"+number);
// task1.3`
// 1
// console.log(Math.max(...number));
// 2
//let max = number[0];
// for (let i=0;i<number.length; i++){
//     if(number[i]>max){
//         max=number[i];
//     }
// }
// console.log("Max",max);

// const employees=[
//     {nume:"Jamil",salary:50000,department :"TI"},
//     {nume:"Jale",salary:60000,department :"HR"},
//     {nume:"Baayram",salary:55000,department :"TI"},
//     {nume:"sahil",salary:75000,department :"HR"},
//     {nume:"Mayam",salary:65000,department :"TI"},
//     {nume:"Elara",salary:80000,department :"HR"},
//     {nume:"Davud",salary:70000,department: "TI"},
// ];
// // task2.1
// // for (let i=0 ; i<employees.length; i++){
// //     if(
// //         employees[i].salary>65000
// //     ) {console.log(employees[i]);
// //     }
// // }

// // task2.2
// for (let i = 0; i < employees.length; i++) {
//     if (
//         employees[i].salary > 65000 &&
//         employees[i].department === "TI") 
//         {console.log(employees[i]);
//     }
//   }
// // task2.3

// for (let i = 0; i < employees.length; i++) {
//     if (employees[i].department === "HR") 
//         {console.log(employees[i]);
//     }
//   }

  

// let countries = [
//   "Afganistan",
//   "Albania",
//   "Algeria",
//   "Andorra",
//   "Angola",
//   "Austria",
//   "Azerbaijan",
//   "Bahamas",
//   "Bahrain",
//   "Brazil",
//   "British Virgin Islands",
//   "Bruei",
//   "Bulgarisa",
//   "Burkian Faso",
//   "Burundi",
//   "Estonia",
//   "Ethiopia",
//   "Falkland Islands",
//   "Faroe Islands",
// ];



// task3.1
// for(let i=0; i<countries.length; i++){
//     let log=countries[i];
//     let length=countries.length;
//     console.log(`${log}, ${length} `);
// }
// task3.2
// for (let i = 0; i < countries.length; i++) {
//     let country = countries[i];
// if(country[0]==="A" && country.slice(-1)==="a") {
//       console.log(country);
//     }
//   }

let sampleNews = `As software developers, the natural tendency is to start developing applications based on your own 
hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, 
and new features happen.`

let bosuluq= sampleNews.match(/ /g);

if (bosuluq){
   let bosuluqsayi =bosuluq.length;
   console.log("bosluq sayi"+bosuluqsayi);}
   else {
    console.log("bosluq sayi yoxdur.");
   }
