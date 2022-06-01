var myNodelist = document.getElementsByTagName("LI");
var i;
 document.getElementById('myUL').style.display="none";
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}



// Create a new list item when clicking on the "Add" button
function newElement() {
    document.getElementById('myUL').style.display="none";
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  //li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
   
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  var div = document.createElement("div");
  div.className = "list-item";
  li.appendChild(div);
  div.appendChild(t);
  var span = document.createElement("SPAN");
  //var txt = document.createTextNode("\u00D7");
  span.className = "close";
  //span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  
}
function displayList() {
    document.getElementById('myUL').style.display="block";
    }
