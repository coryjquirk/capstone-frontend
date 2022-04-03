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