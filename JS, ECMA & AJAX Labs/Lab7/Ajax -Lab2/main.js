let pagecounter = 1;
var btn = document.getElementById('btn');
var animalContainer =document.getElementById('info');
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','https://reqres.in/api/users?page=2');
ourRequest.onload = function(){
    var ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData.data)
    renderHtml(ourData.data);
}
ourRequest.send();
// pagecounter++;
// if(pagecounter > 5){
//     document.getElementById('btn').classList.add('hide-me');
// }


function renderHtml(data){
var htmlString =" "
for(let i=0;i<data.length;i++){
    // htmlString += "<p >" +"FullName:" +data[i].first_name +" "+data[i].last_name +".</p>";
    htmlString += "<div class='card'>"+"<div class='image-container'><img src="+data[i].avatar+"  style='width:100%;height:100%;'></div>"+"<div class='info-txt'><h3>"+"FullName:" +data[i].first_name +" "+data[i].last_name +"</h3><hr style=' border: 0px solid #D6D6D6; border-top-width: 1px;' />"+  
    "<p class='title'>"+"ID:"+data[i].id+"</p><hr style=' border: 0px solid #D6D6D6; border-top-width: 1px;' />"+"<p class='title'>"+"Email ID:"+data[i].email+"</p></div>"+"</div>";
}
   
  

animalContainer.insertAdjacentHTML('beforeend', htmlString)
}