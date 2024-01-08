fetch("https://isro.vercel.app/api/spacecrafts")
.then((data)=>{
    return data.json();
})
.then((objectData)=>{
    console.log(objectData.spacecrafts[0].name)
    let tableData="";
    objectData.spacecrafts.map((values)=>{
        tableData+=` <tr>
        <th>${values.id}</th>
        <td>${values.name}</td>
         </tr>`;
    })
    document.getElementById("table-body").innerHTML=tableData;
})
.catch((err)=>{
    console.log("Error");
})