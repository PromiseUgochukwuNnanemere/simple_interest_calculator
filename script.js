function compute()
{
    // This was my initial code
    // var principal = document.getElementById('principal').parseInt(value);
    // var rate = document.getElementById('rate').parseFloat(value);
    // var years = document.getElementById('years');
    // var interest = principal * num_years * rate / 100;
    // var amount = pasrseInt(principal + parseFloat(interest));
    // var result = document.getElementById('result')

    var principal = document.getElementById('principal').value;
    var rate = document.getElementById('rate').value;
    var years = document.getElementById('years').value;
    var interest = principal * years * rate / 100;
    var amount = parseInt(principal) + parseFloat(interest);
    var result = document.getElementById('result');

    var year = new Date().getFullYear() + parseInt(years);

    if(principal <= 0) {
        alert("Enter a positive number!");
        document.getElementById("principal").focus();
    }

    else {
        result.innerHTML = "If you deposit $" + "<mark>" + principal + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + "\<br\> You will receive an amount of $" + "<mark>" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";
    }
}
      
function updateRate() {
    var rateval = document.getElementById('rate').value;
    document.getElementById('rate_val').innerText = rateval;
}




