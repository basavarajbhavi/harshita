function Operation(operand) 
{ 
                                

        var firstValue = parseInt(document.getElementById('txtFirstNumber').value);
        var secondValue = parseInt(document.getElementById('txtSecondNumber').value);                           
        var result = 0;
        switch(operand)
        {

case '+' :      result = ( (x, y) => {  return x + y; } )( firstValue, secondValue );break;
case '-' :      result = ( (x, y) => {  return x - y; } )( firstValue, secondValue );break;
case '*' :      result = ( (x, y) => {  return x * y; } )( firstValue, secondValue );break;
case '/' :      result = ( (x, y) => {  return x / y; } )( firstValue, secondValue );break;
        }
                                
   alert(result);
}