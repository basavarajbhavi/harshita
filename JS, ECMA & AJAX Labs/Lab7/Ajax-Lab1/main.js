let pagecounter = 1;
var btn = document.getElementById('btn');
var animalContainer =document.getElementById('info');
btn.addEventListener("click",function(){
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','https://jsonplaceholder.typicode.com/todos/'+pagecounter+'');
ourRequest.onload = function(){
    var ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData)
    renderHtml(ourData);
}
ourRequest.send();
pagecounter++;
if(pagecounter > 5){
    document.getElementById('btn').classList.add('hide-me');
}

});
function renderHtml(data){
var htmlString =" "

    htmlString += "<p id='"+data.id+"' class='text"+data.completed+"'>" +"Id:" +data.id +" has a title:"+data.title +".</p>";
  

animalContainer.insertAdjacentHTML('beforeend', htmlString)
}