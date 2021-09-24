function compute()
{
    //variable for principal
    var principal = document.getElementById("principal").value;

    //checks if principal is less than or equal to 0
    if(principal <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus;
    }
    //variable for rate
    var rate = document.getElementById("rate").value;
    //variable for years
    var years = document.getElementById("years").value;
    //variable for interest
    var interest = principal * years * rate /100;
    //variable for year
    var year = new Date().getFullYear()+parseInt(years);
    
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        
