//   fetch(
//   "https://etmarketsapis.indiatimes.com/ET_TechnicalScreeners/topTrendingScreeners"
//   ).then((data) => {
//     return data.json();
//   }).then((completeData) => {

//     let data1 = "";

//     completeData.topTrendingScreeners.map((values) => {
    //   const upDownClass =
    //     values.solrDocuments[1].performanceD1 >= 0 ? "positive" : "negative";

//       data1 += ` <div class="card">
//       <div class="screenerType">${values.screenerType}</div>
//       <div class="screenerName">${values.screenerName}</div>
//       <div class="screenerDesc">${values.shortDescription}</div>
//       <div class="screenerComp">
//         <table>
//           <tbody>
//             <tr>
//               <td class="title">${values.solrDocuments[0].companyName}</td>
//               <td class="ltp">${values.solrDocuments[0].ltp}</td>
//               <td class="perfD1">
//                 <span class="${upDownClass}">
//                 </span>
//                 ${values.solrDocuments[0].performanceD1}
//                 &percnt;
//               </td>
//             </tr>

//             <tr>
//               <td>${values.solrDocuments[1].companyName}</td>
//               <td class="ltp">${values.solrDocuments[1].ltp}</td>
//               <td class="perfD1">
//                 <span class="${upDownClass}">
//                 </span>
//                 ${values.solrDocuments[1].performanceD1}
//                 &percnt;
//               </td>
//             </tr>

//             <tr>
//               <td>${values.solrDocuments[2].companyName}</td>
//               <td class="ltp"> ${values.solrDocuments[2].ltp}</td>
//               <td class="perfD1">
                // <span class="${upDownClass}">
                // </span>
//                 ${values.solrDocuments[2].performanceD1}
//                 &percnt;
//               </td>
//             </tr>

//           </tbody>
//         </table>
//       </div>

//       <div class="count">${values.resultCount}</div>
//     </div>
//     `;
//     });
//     document.getElementById("topCandleStickScreener").innerHTML = data1;
//   });

/* 1. Making Function separately and passing as an argument in fetch().then().then()
   2. Using document.createElement or HTML Dom Manipulation

*/

fetch(
  "https://etmarketsapis.indiatimes.com/ET_TechnicalScreeners/topTrendingScreeners"
).then((data) => {
    return data.json();
  }).then((completeData) => myFun(completeData));

function myFun(completeData) {
  
  
for(let i=0;i<6;i++){
   
  const card = document.createElement("div");
  card.className = "card";
 
  document.getElementById("topCandleStickScreener").appendChild(card);

  const screenerType = document.createElement("div");
  screenerType.className = "screenerType";

  const screenerName = document.createElement("div");
  screenerName.className = "screenerName";

  const screenerDesc = document.createElement("div");
  screenerDesc.className = "screenerDesc";

  const screenerComp = document.createElement("div");
  screenerComp.className = "screenerComp";

  const count = document.createElement("div");
  count.className = "count";

  card.append(screenerType, screenerName, screenerDesc, screenerComp, count);

  document.getElementsByClassName("screenerType")[i].textContent = completeData.topTrendingScreeners[i].screenerType;
  document.getElementsByClassName("screenerName")[i].textContent = completeData.topTrendingScreeners[i].screenerName;
  document.getElementsByClassName("screenerDesc")[i].textContent = completeData.topTrendingScreeners[i].shortDescription;
  document.getElementsByClassName("count")[i].textContent = completeData.topTrendingScreeners[i].resultCount;

  let tbl = document.createElement("table");

  document.getElementsByClassName("screenerComp")[i].appendChild(tbl);


    for(let j=0;j<3;j++){

        var upDownClass =  completeData.topTrendingScreeners[i].solrDocuments[j].performanceD1 >= 0 ? "positive" : "negative";   

        var row = tbl.insertRow();
        var cell1=row.insertCell();
        var cell2=row.insertCell();
        var cell3=row.insertCell();

        cell1.innerHTML=completeData.topTrendingScreeners[i].solrDocuments[j].companyName;
        cell2.innerHTML=completeData.topTrendingScreeners[i].solrDocuments[j].ltp;
        cell3.innerHTML=completeData.topTrendingScreeners[i].solrDocuments[j].performanceD1+"%";

        cell2.className="ltp";
        cell3.className="perfD1";

        
        var upDown=document.createElement("span");
        upDown.className=upDownClass;
        cell3.prepend(upDown);
        
        
    }



}  
       
    
   

    




 

  // let screenerName = document.createElement('div');
  // screenerName.className = 'screenerName';

  // let screenerDesc = document.createElement('div');
  // screenerDesc.className = 'screenerDesc';

  // let screenerComp = document.createElement('div');
  // screenerComp.className = 'screenerComp';

  // let count = document.createElement('div');
  // count.className = 'count';

  // card.append(screenerType,screenerName,screenerDesc,screenerComp,count);
  // document.getElementsByClassName('screenerType')[0].innerHTML=completeData.topTrendingScreeners[0].screenerType;

  // document.getElementById("topCandleStickScreener").innerHTML = card;

  // completeData.topTrendingScreeners.map((values) => {
  // const upDownClass = values.solrDocuments[1].performanceD1 >= 0 ? "positive" : "negative";

  //     data1 += ` <div class="card">
  //     <div class="screenerType">${values.screenerType}</div>
  //     <div class="screenerName">${values.screenerName}</div>
  //     <div class="screenerDesc">${values.shortDescription}</div>
  //     <div class="screenerComp">
  //       <table>
  //         <tbody>
  //           <tr>
  //             <td class="title">${values.solrDocuments[0].companyName}</td>
  //             <td class="ltp">${values.solrDocuments[0].ltp}</td>
  //             <td class="perfD1">
  //               <span class="${upDownClass}">
  //                 ${values.solrDocuments[0].performanceD1}
  //               </span>
  //               &percnt;
  //             </td>
  //           </tr>

  //           <tr>
  //             <td>${values.solrDocuments[1].companyName}</td>
  //             <td class="ltp">${values.solrDocuments[1].ltp}</td>
  //             <td class="perfD1">
  //               <span class="${upDownClass}">
  //                 ${values.solrDocuments[1].performanceD1}
  //               </span>
  //               &percnt;
  //             </td>
  //           </tr>

  //           <tr>
  //             <td>${values.solrDocuments[2].companyName}</td>
  //             <td class="ltp"> ${values.solrDocuments[2].ltp}</td>
  //             <td class="perfD1">
  //               <span class="${upDownClass}">
  //                 ${values.solrDocuments[2].performanceD1}
  //               </span>
  //               &percnt;
  //             </td>
  //           </tr>
  //         </tbody>
  //       </table>
  //     </div>

  //     <div class="count">${values.resultCount}</div>
  //   </div>
  //   `;
  //   });
  //   document.getElementById("topCandleStickScreener").innerHTML = data1;
}
