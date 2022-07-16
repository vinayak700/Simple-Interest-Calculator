// Function to compute a simple interest.
function compute()
{   
    // Fetching input field values into DOM
    var principal = document.getElementById("principal");
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal.value*rate/100*years;
    var year = new Date().getFullYear()+parseInt(years);
    var result  = document.getElementById("result");

    // Adding a condition to expect a positive integer
    if(principal.value<=0){
        alert("Enter a positive Number");
        principal.focus();
    }
    // Updating content in the document using DOM
    else{
        result.innerHTML = `If you deposit <span class = 'highlight'> ${principal.value} </span> \<br\>at an interest rate of <span class="highlight">${rate}%</span>\<br\>You will receive an amount of <span class="highlight">${interest}</span>\<br\>in the year <span class = "highlight">${year}</span>\<br\>`
    }
}
 
// Function updating the interest rate slider value dynamically
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval+"%";
}