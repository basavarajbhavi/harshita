function multiply(){
    a=Number(document.my_cal.first.value);
    b=Number(document.my_cal.second.value);
    c=a*b;
    document.my_cal.total.value=c;
    document.getElementById("symbol").innerHTML = "&#215;"
  }

  function addition(){
    a=Number(document.my_cal.first.value);
    b=Number(document.my_cal.second.value);
    c=a+b;
    document.my_cal.total.value=c;
    document.getElementById("symbol").innerHTML = "&#43;"
  }


  function subtraction(){
    a=Number(document.my_cal.first.value);
    b=Number(document.my_cal.second.value);
    c=a-b;
    document.my_cal.total.value=c;
    document.getElementById("symbol").innerHTML = "&#8722;"
  }


  function division(){
    a=Number(document.my_cal.first.value);
    b=Number(document.my_cal.second.value);
    c=a/b;
    document.my_cal.total.value=c;
    document.getElementById("symbol").innerHTML = "&#247;"
  }

 