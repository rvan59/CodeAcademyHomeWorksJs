// function vurma(a,b){
//     return a*b;
// }
// let sonuc= vurma(3,4);
// console.log("cvb:"+ sonuc);

// function hesabla(a,b){
//     return a+b;
// }
// let cvb=hesabla(7,9);
// console.log("cvb:"+cvb);

// function number (  a ,b){
//     return  (a+b);
// }
// let toplam=number( 8 ,9);
// console.log("cvb;"+ toplam);

// let xan=(a,b) => 2*(a+b);
// console.log(xan(3,4));

// let num = number=>number**2;
// console.log(num(9));

// function net(){
//     console.log(arguments);
// }

// console.log(net(1,2,3,4));
// console.log(net(1,2,3,4,5,6));
// console.log(net(1,2,3,4,5,6,7,8,9));

// let sozsayi = ["sen" ,"men" ,"o","biz"];
// let say=sozsayi.length;

// console.log("element sayi :"+say);
// let sozsayi = "sen, men ,o,biz!";
// let herifsayi=sozsayi.length;

// console.log("herif sayi :"+herifsayi);

// let meyver=[" armud","alma" , "nar"];
// console.log("ymeyveler:"+meyver);

// let yenimeyveler = meyver.pop();
// console.log("yeni meyveler :"+yenimeyveler);
// console.log(meyver);

// let gul=["qizil gul","roza","yasemen"];
// gul.unshift("qerenfil")
// console.log(gul);

// let car1=["toyeta","mersedes","kia"]
// let car2=["canqan","opel","piryus"]

// let car1=[1,2,3]
// let car2=[4,5,6]
// let masinlar=car1.concat(car2)
// console.log(masinlar);

// let meyveler = ["elma", "armut", "çilek", "kiraz", "muz"];
// // slice ile belirli bir aralıktaki meyveleri kopyalamak
// let netice=meyveler.slice(1,5);
// console.log(netice);
// let netice=meyveler.slice(3);
// console.log(netice);

// let meyveler = ["elma", "armut", "çilek", "kiraz", "muz"];
// let silinenler=meyveler.splice(3,4)
// console.log("silinenler",silinenler);
// console.log("yeni meyverler",meyveler);

// meyveler.splice(4,0,"heyva","banan")
// console.log(meyveler);

// let meyveler = ["elma", "armut", "çilek", "kiraz"];
// let elma=meyveler.indexOf("elma");
// let heyva=meyveler.indexOf("heyva");
// console.log(elma);
// console.log(heyva);

// let sayilar = [1, 2, 3, 4, 5, 3, 6];
// let sonsayicixarmaq = sayilar.lastIndexOf(5);
// console.log(sonsayicixarmaq);

// let meyveler = ["elma", "armut", "çilek", "kiraz"];
// // olub olmadigini yoxlayir
// let armudvarmi=meyveler.includes("armut");
// let narvarmi=meyveler.includes("nar");
// console.log(armudvarmi);
// console.log(narvarmi);

// let meyveler = ["elma", "armut", "çilek", "kiraz"];
// let sayilar = [1, 2, 3, 4, 5, 3, 6];
// let yeni=meyveler.join();
// console.log("netoce:",yeni);
// let yeninetice=sayilar.join("-");
// console.log("netoce:",yeninetice );

// let meyveler = ["elma", "armut", "çilek", "kiraz"];
// let sayilar = [1, 2, 3, 4, 5, 3, 6];
// meyveler.forEach(function(meyve){
//     console.log(meyve);
// });
// sayilar.forEach(function(sayi,indes){
//     console.log("indes:"+indes,"sayi:"+sayi);
// });

// let sayilar = [1, 2, 3, 4, 5, 3, 6];
// let kvadrat=sayilar.map(function(kvadrat){
//     return kvadrat*kvadrat;
// });
// console.log("kvadrat"+kvadrat);

// let meyveler = ["elma", "armut", "çilek"];
// let boyukheriflerle=meyveler.map(function(boyuk){
//     return boyuk.toUpperCase();
// }); 
// console.log(boyukheriflerle);