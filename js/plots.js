const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const soilType = document.getElementById("soilType");
const cultivationStyle = document.getElementById("cultivationStyle");
const slotsTaken = document.getElementById("slotsTaken");
const slotsTotal = document.getElementById("slotsTotal");

const plotSBtn = document.getElementById("plotSBtn");
plotSBtn.addEventListener("click"), function(e){
    e.preventDefault();
    addTableRow();
}

function addTableRow(){
    var plotTable = document.getElementById("plotTable");
    var row = plotTable.insertRow(0);
    var cell1 = row.inserCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCel1(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    cell1.innerHTML = "1";
    cell2.innerHTML = soilType;
    cell3.innerHTML = cultivationStyle;
    cell4.innerHTML = firstName+" "+lastName;
    cell5.innerHTML = new Date();
    cell6.innerHTML = "1";
    cell7.innerHTML = "1";
    cell8.innerHTML = "1";


}