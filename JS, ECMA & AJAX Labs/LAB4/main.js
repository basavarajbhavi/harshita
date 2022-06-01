if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
}

function registration()
{
  
    var name= document.getElementById("t1").value;
    var pwd= document.getElementById("t4").value;           
    var cpwd= document.getElementById("t5").value;
    
    //email id expression code
    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(name=='')
    {
        alert('Please enter your name');
    }
    else if(!letters.test(name))
    {
        alert('Name field required only alphabet characters');
    }
    
    else if(pwd=='')
    {
        alert('Please enter Password');
    }
    else if(cpwd=='')
    {
        alert('Enter Confirm Password');
    }
    else if(!pwd_expression.test(pwd))
    {
        alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
    }
    else if(pwd != cpwd)
    {
        //alert ('Password not Matched');
        document.getElementById('not-matchtxt').innerHTML = "Password did not Matched"
    }
    else if(document.getElementById("t5").value.length < 6)
    {
        alert ('Password minimum length is 6');
    }
    else if(document.getElementById("t5").value.length > 12)
    {
        alert ('Password max length is 12');
    }
    else if(document.getElementById("gender").value == '' || document.getElementById("gender").value == 'none'){
        alert('Select Gender');
    }
    else
    {                                           
           
          //  // Redirecting to other page or webste code. 
          window.location.href="success.html";
    }
}
const toggle = document.querySelector(".toggle"),
              input = document.querySelector("#t4");

              toggle.addEventListener("click", () =>{
                  if(input.type ==="password"){
                    input.type = "text";
                    toggle.classList.replace("uil-eye-slash", "uil-eye");
                  }else{
                    input.type = "password";
                    toggle.classList.replace("uil-eye", "uil-eye-slash");
                  }
              })
              let strengthBadge = document.getElementById('StrengthDisp');
              let password = document.getElementById('t4');
let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
password.addEventListener("input", () => {
  strengthBadge.style.visibility = 'visible';
  StrengthChecker(password.value);
  if(password.value.length !== 0) {
      strengthBadge.style.display != 'visible';
  } else {
      strengthBadge.style.display = 'hide';
  }
});
function StrengthChecker(PasswordParameter) {
  if(strongPassword.test(PasswordParameter)) {
      strengthBadge.textContent = 'Strong';
  } else if(mediumPassword.test(PasswordParameter)) {
      strengthBadge.textContent = 'Good';
  } else {
      strengthBadge.textContent = 'Weak';
  }
}
function run(){
  var e = document.getElementById("gender");
  var strUser = e.value;
  if(strUser== 1){
    //document.getElementById('gender-image').innerHTML = 'male'
    document.getElementById('gender-image').classList.add('male');
    document.getElementById('gender-image').classList.remove('female');
  }
  else if(strUser== 2){
   // document.getElementById('gender-image').innerHTML = 'female'
   document.getElementById('gender-image').classList.remove('male');
    document.getElementById('gender-image').classList.add('female');
  }
  else{
    document.getElementById('gender-image').innerHTML = ''
    document.getElementById('gender-image').classList.add('');
  }
}
