function constCalculator(){
    //var a = document.getElementById("COR").value;
    //var b = document.getElementById("COF").value;
    //var c = document.getElementById("COP").value;
    //var d = document.getElementById("COPB").value;
    //var e = document.getElementById("COC").value;
    
    
    var a = document.forms["xyz"]["COR"].value;
    var b = document.forms["xyz"]["COF"].value;
    var c = document.forms["xyz"]["COP"].value;
    var d = document.forms["xyz"]["COPB"].value;
    var e = document.forms["xyz"]["COC"].value;

    var tot = +a + +b + +c + +d + +e ;
    var payable = tot*(1+(14/100));
    alert("Your total cost is: $" + tot + " and your total payable with 14% tax added is: $ " + payable);
}