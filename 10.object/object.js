// let startA = document.querySelector(".start");
// let span = document.querySelector(".span");
// let stopB = document.querySelector(".stop");

// let count = 0;
// let countInterval;

// startA.addEventListener("click", function () {
//   clearInterval(countInterval);
//   countInterval = setInterval(() => {
//     count += 1;
//     span.innerText = count;
//   }, 1000);
// });

// stopB.addEventListener("click", function () {
//   clearInterval(countInterval);
// });

// let resetBtn = document.querySelector(".reset");

// resetBtn.addEventListener("click", function () {
//   count = 0;
//   span.innerText = count;
//   clearInterval(countInterval);
// });

// let increment = document.querySelector(".increment");

// increment.addEventListener("click", function () {
//   count += 1;
//   span.innerText = count;
// });

// let decrement = document.querySelector(".decrement");
// console.log(decrement);

// decrement.addEventListener("click", function () {
//   count -= 1;
//   span.innerText = count;
// });

// // ----------

// let ininputA = document.querySelector("#ininput1");
// let increment2 = document.querySelector(".increment1");

// increment2.addEventListener("click", function () {
//   count += +ininputA.value;
//   span.innerText = count;
// });


// let decrement2 = document.querySelector(".decrement2");
// let ininputB = document.querySelector("#ininput2");

// decrement2.addEventListener("click", function () {
//   count -= +ininputB.value;
//   span.innerText = count;
// });


let users = [ {
  id: 1,
  first_name: "Erda",
  last_name: "Waddingham",
  email: "ewaddingham0@mysql.com",
  gender: "Female",
},
{
  id: 2,
  first_name: "Bev",
  last_name: "Gavin",
  email: "bgavin1@archive.org",
  gender: "Female",
},
{
  id: 3,
  first_name: "Tabb",
  last_name: "Murphy",
  email: "tmurphy2@ameblo.jp",
  gender: "Male",
},
{
  id: 4,
  first_name: "Elberta",
  last_name: "Hansom",
  email: "ehansom3@infoseek.co.jp",
  gender: "Female",
},
{
  id: 5,
  first_name: "Chantalle",
  last_name: "Espinoza",
  email: "cespinoza4@t.co",
  gender: "Female",
},
{
  id: 6,
  first_name: "Chickie",
  last_name: "Bail",
  email: "cbail5@domainmarket.com",
  gender: "Male",
},
{
  id: 7,
  first_name: "Conney",
  last_name: "Soot",
  email: "csoot6@noaa.gov",
  gender: "Male",
},
{
  id: 8,
  first_name: "Emlynne",
  last_name: "Tabourier",
  email: "etabourier7@51.la",
  gender: "Female",
},
{
  id: 9,
  first_name: "Shadow",
  last_name: "Neicho",
  email: "sneicho8@nifty.com",
  gender: "Male",
},
{
  id: 10,
  first_name: "Caro",
  last_name: "Dunnan",
  email: "cdunnan9@biglobe.ne.jp",
  gender: "Female",
},
{
  id: 11,
  first_name: "Sissy",
  last_name: "Summergill",
  email: "ssummergilla@google.nl",
  gender: "Female",
},
{
  id: 12,
  first_name: "Gerda",
  last_name: "Hallex",
  email: "ghallexb@bloglovin.com",
  gender: "Female",
},
{
  id: 13,
  first_name: "Maurizia",
  last_name: "Vale",
  email: "mvalec@tuttocitta.it",
  gender: "Female",
},
{
  id: 14,
  first_name: "Benjie",
  last_name: "Gilbee",
  email: "bgilbeed@wp.com",
  gender: "Male",
},
{
  id: 15,
  first_name: "Prescott",
  last_name: "Ariss",
  email: "parisse@networksolutions.com",
  gender: "Male",
},
{
  id: 16,
  first_name: "Hazel",
  last_name: "Osbourn",
  email: "hosbournf@earthlink.net",
  gender: "Female",
},
{
  id: 17,
  first_name: "Courtnay",
  last_name: "McIlriach",
  email: "cmcilriachg@usa.gov",
  gender: "Male",
},
{
  id: 18,
  first_name: "Betta",
  last_name: "Bilby",
  email: "bbilbyh@miibeian.gov.cn",
  gender: "Female",
},
{
  id: 19,
  first_name: "Dalia",
  last_name: "Hanhardt",
  email: "dhanhardti@mozilla.org",
  gender: "Female",
},
{
  id: 20,
  first_name: "Andrey",
  last_name: "Costin",
  email: "acostinj@nydailynews.com",
  gender: "Male",
},
{
  id: 21,
  first_name: "Gilly",
  last_name: "Proven",
  email: "gprovenk@google.ca",
  gender: "Female",
},
{
  id: 22,
  first_name: "Tull",
  last_name: "Petch",
  email: "tpetchl@phpbb.com",
  gender: "Male",
},
{
  id: 23,
  first_name: "Ailsun",
  last_name: "Saltrese",
  email: "asaltresem@house.gov",
  gender: "Female",
},
{
  id: 24,
  first_name: "Kim",
  last_name: "Roseveare",
  email: "krosevearen@deliciousdays.com",
  gender: "Female",
},
{
  id: 25,
  first_name: "Kimmie",
  last_name: "Gallandre",
  email: "kgallandreo@hp.com",
  gender: "Genderfluid",
},
{
  id: 26,
  first_name: "Serena",
  last_name: "Blainey",
  email: "sblaineyp@constantcontact.com",
  gender: "Female",
},
{
  id: 27,
  first_name: "Harman",
  last_name: "Louys",
  email: "hlouysq@pagesperso-orange.fr",
  gender: "Male",
},
{
  id: 28,
  first_name: "Pepe",
  last_name: "McGaughey",
  email: "pmcgaugheyr@google.de",
  gender: "Genderfluid",
},
{
  id: 29,
  first_name: "Zeke",
  last_name: "Drews",
  email: "zdrewss@yellowpages.com",
  gender: "Male",
},
{
  id: 30,
  first_name: "Shirleen",
  last_name: "Dybbe",
  email: "sdybbet@jalbum.net",
  gender: "Female",
},
{
  id: 31,
  first_name: "Calvin",
  last_name: "Covill",
  email: "ccovillu@apache.org",
  gender: "Male",
},
{
  id: 32,
  first_name: "Arnoldo",
  last_name: "Stittle",
  email: "astittlev@domainmarket.com",
  gender: "Male",
},
{
  id: 33,
  first_name: "Horatius",
  last_name: "Stancliffe",
  email: "hstancliffew@nps.gov",
  gender: "Male",  },]

  function drawTable(data) {
    tBody.innerHTML = "";
    data.forEach((element) => {
      let trElement = document.createElement("tr");
  
      trElement.innerHTML = `
                            <td>${genderid}</td>
                            <td>${element.first_name}</td>
                            <td>${element.last_name}</td>
                            <td>${element.email}</td>
                            <td>${element.gender}</td>
                                     `;
      tBody.append(trElement);
    });
  }
 