const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const soilType = document.getElementById("soilType");
const cultivationStyle = document.getElementById("cultivationStyle");
const slotsTaken = document.getElementById("slotsTaken");
const slotsTotal = document.getElementById("slotsTotal");
const hiddenTakenError = document.getElementById("hiddenTakenError");
const hiddenTotalError = document.getElementById("hiddenTotalError");
const hiddenFNError = document.getElementById("hiddenFNError");
const hiddenLNError = document.getElementById("hiddenLNError");

const plotData = [{
    plotId: 2,
    soilType: "sandy soil",
    cultivationStyle: "covered hoop house",
    steward: "Man Jay",
    createDate: new Date('April 15, 2020 09:05:00'),
    filled: 7,
    available: "",
    total: 9
},{
    plotId: 3,
    soilType: "muddy soil",
    cultivationStyle: "traditional outdoor",
    steward: "Kate Bush",
    createDate: new Date('May 15, 2021 08:24:00'),
    filled: 28,
    available: "",
    total: 40
},{
    plotId: 4,
    soilType: "sandy soil",
    cultivationStyle: "indoor hydroponics",
    steward: "Madeup Dude",
    createDate: new Date('December 17, 1995 11:25:00'),
    filled: 12,
    available: "",
    total: 67
},{
    plotId: 5,
    soilType: "gravel",
    cultivationStyle: "outdoor raised beds",
    steward: "Johnny Appleseed",
    createDate: new Date('December 17, 1995 10:20:00'),
    filled: 1,
    available: "",
    total: 56
},{
    plotId: 6,
    soilType: "woody soil",
    cultivationStyle: "covered raised beds",
    steward: "Madeup Dude",
    createDate: new Date('March 17, 2018 10:05:00'),
    filled: 5,
    available: "",
    total: 30
},{
    plotId: 7,
    soilType: "woody soil",
    cultivationStyle: "covered raised beds",
    steward: "Johnny Appleseed",
    createDate: new Date('May 20, 2020 09:58:00'),
    filled: 5,
    available: "",
    total: 30
},{
    plotId: 8,
    soilType: "woody soil",
    cultivationStyle: "covered raised beds",
    steward: "Man Jay",
    createDate: new Date('June 16, 2017 10:49:00'),
    filled: 5,
    available: "",
    total: 30
},{
    plotId: 9,
    soilType: "healthy soil",
    cultivationStyle: "covered raised beds",
    steward: "Kate Bush",
    createDate: new Date('July 18, 2019 08:24:00'),
    filled: 5,
    available: "",
    total: 30
}]
populateTable(); //runs every time page loads.
function populateTable(){
    let rowCt = document.getElementById("plotTable").rows.length;
    let plotTable = document.getElementById("plotTable");
    for (let i = 0; i < plotData.length; i++){
        //rowCt++ ensures each new row of data inserted below the last row added.
        let row = plotTable.insertRow(rowCt++);
        //creates the table cells in the new row:
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
        let cell7 = row.insertCell(6);
        let cell8 = row.insertCell(7);
        //populating the new cells:
        cell1.innerHTML = "<strong>" + plotData[i].plotId +"</strong>";
        cell2.innerHTML = plotData[i].soilType;
        cell3.innerHTML = plotData[i].cultivationStyle;
        cell4.innerHTML = plotData[i].steward;
        cell5.innerHTML = plotData[i].createDate; //clean up format w/ Regex
        cell6.innerHTML = plotData[i].filled;
        cell7.innerHTML = plotData[i].total - plotData[i].filled; //avail plots calc on render
        cell8.innerHTML = plotData[i].total;
    }
}
let plotSBtn = document.getElementById("plotSBtn");
plotSBtn.addEventListener("click", function(e){
    //before adding `new Number`, slotsTaken.value was being evaluated as string
    //causing 10 to be interpreted as less than 2, 60 less than 7 etc.
    let slotsTakenNum = new Number(slotsTaken.value);
    let slotsTotalNum = new Number(slotsTotal.value);
    let fullName = firstName.value + " " + lastName.value;
    e.preventDefault();
    if (validateName(firstName.value, lastName.value), validateSlots(slotsTakenNum, slotsTotalNum)){
        addTableRow(fullName)
        showSnackbar(fullName, soilType.value, cultivationStyle.value)
    }
});
function addTableRow(name){
    let rowCt = document.getElementById("plotTable").rows.length;
    console.log(rowCt + " rows in Table");
    let plotTable = document.getElementById("plotTable");
    let row = plotTable.insertRow(rowCt);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);
    let cell8 = row.insertCell(7);
    cell1.innerHTML = "<strong>" + rowCt +"</strong>";
    cell2.innerHTML = soilType.value;
    cell3.innerHTML = cultivationStyle.value;
    cell4.innerHTML = name;
    cell5.innerHTML = new Date();
    cell6.innerHTML = slotsTaken.value;
    cell7.innerHTML = (slotsTotal.value - slotsTaken.value);
    cell8.innerHTML = slotsTotal.value;
}
firstName.addEventListener("input", function() {
    hiddenFNError.style.display = "none";
    firstName.style.border = "none";
});

lastName.addEventListener("input", function() {
    hiddenLNError.style.display = "none";
    lastName.style.border = "none";
});
slotsTaken.addEventListener("input", function() {
    hiddenTakenError.style.display = "none";
    slotsTaken.style.border = "none";
});
slotsTotal.addEventListener("input", function() {
    hiddenTotalError.style.display = "none";
    slotsTotal.style.border = "none";
});
function validateName(first, last){
    if (first == ''){
        firstName.style.border = "3px solid red";
        hiddenFNError.style.display = "block";
        hiddenFNError.textContent = "First name cannot be blank."
        return false;
    } else if (last == ''){
        lastName.style.border = "3px solid red";
        hiddenLNError.style.display = "block";
        hiddenLNError.textContent = "Last name cannot be blank."
        return false;
    } else {
        return true;
    }
}
function validateSlots(taken, total){
    if(taken < 0 || taken == null){
        slotsTaken.style.border = "3px solid red";
        hiddenTakenError.style.display = "block";
        hiddenTakenError.textContent = "Must be greater than 0.";
        return false;
    } else if (total < 1 || total == null){
        slotsTotal.style.border = "3px solid red";
        hiddenTotalError.style.display = "block";
        hiddenTotalError.textContent = "Must be greater than 0.";
        return false;
    } else if (taken > total){
        console.log("Taken: " + taken);
        console.log("Total: " + total);
        slotsTotal.style.border = "3px solid red";
        slotsTaken.style.border = "3px solid red";
        hiddenTotalError.style.display = "block";
        hiddenTotalError.textContent = "Total must be greater than slots taken.";
        return false
    } else{
        return true;
    }
}
function showSnackbar(name, soil, cultivation) {
    var snack = document.getElementById("snackbar");
    document.getElementById("snackTxt").innerText = ("Plot was added. Name: " + name + ", Soil: " + soil + ", Cultivation: " + cultivation + ".");
    snack.className = "show";
  
    setTimeout(function(){ snack.className = snack.className.replace("show", ""); }, 3000);
  }