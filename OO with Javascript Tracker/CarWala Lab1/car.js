var data =[];

const fetchData = async () => {
  try {
    const res = await fetch("2022.json");
    this.data = await res.json();
    console.log(data)
    renderHtml(this.data);
    bindCheckBox(this.data);
  } catch (e) {
    console.log("something went wrong!", e);
  }
};

fetchData();
function renderHtml(data){
 
  document.getElementById('data').innerHTML = "";
    var parElement = document.getElementById("data");
    var textToAdd = document.createElement("div");
    textToAdd.className ="car-container"
    parElement.appendChild(textToAdd);
    for(let i=0;i<data.length;i++){
        var path = "car/"+data[i].car_Name+".jpg"
        var products = document.createElement("div");
        products.className = "products"+ " index"+i
        textToAdd.appendChild(products);
        var imgDiv = document.createElement("div");
        imgDiv.className = "img"
        products.appendChild(imgDiv);
        var innerimgDiv = document.createElement("div");
        innerimgDiv.className = "inner-img"
        innerimgDiv.setAttribute("style", "background-image: url("+path+");background-repeat: no-repeat");
        imgDiv.appendChild(innerimgDiv);
        var carInfo = document.createElement("div");
        carInfo.className = "car-info"
        products.appendChild(carInfo);
        var carname = document.createElement("div");
        carname.className ="name";
        carname.innerHTML = data[i].car_Name;
        carInfo.appendChild(carname);
        var carmodel = document.createElement("div");
        carmodel.className ="model";
        carmodel.innerHTML = "Model: "+data[i].model;
        carInfo.appendChild(carmodel);
        var carprice = document.createElement("div");
        carprice.className ="price";
        carprice.innerHTML = data[i].price;
        carInfo.appendChild(carprice);
        var carusage = document.createElement("div");
        carusage.className ="usage_Details";
        carusage.innerHTML = data[i].usage_Details;
        carInfo.appendChild(carusage);
    }
}
function bindCheckBox(data){
  var parElement = document.getElementById("Brands");
  var uniqueName = data.filter((value, index, self) => {
    return (
      self.findIndex((v) => v.car_Name === value.car_Name) === index
    );
  });
  console.log(uniqueName);
  for(let i=0;i<uniqueName.length;i++){
    var checkBoxDiv = document.createElement("div");
    checkBoxDiv.className = "checkbox-container"
    parElement.appendChild(checkBoxDiv);
    var checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.className ="checkbox"
checkbox.name = uniqueName[i].car_Name;
checkbox.value = uniqueName[i].car_Name;
checkbox.id = "label" + i
checkbox.addEventListener("change", removeRow, false);
var label = document.createElement('label')
label.htmlFor = "id";
label.appendChild(document.createTextNode(uniqueName[i].car_Name));


checkBoxDiv.appendChild(checkbox);
checkBoxDiv.appendChild(label);
  }
}
function removeRow(btntype){
  var filteredStores;
   
  const checkedValues = [...document.querySelectorAll('.checkbox')]
  .filter(input => input.checked)
  .map(input => input.value);
  const radioValues = [...document.querySelectorAll('.radioBtn')]
  .filter(input => input.checked)
  .map(input => input.value);
    if ( btntype == 'radioBtn'){
      if(checkedValues.length >= 1){
     
        filteredStores =  data.filter(({ car_Name }) => checkedValues.includes(car_Name));
       
        filteredStores = filteredStores.filter(({ fueltype }) => radioValues.includes(fueltype));
      }
      else{
      
       filteredStores =  data.filter(({ fueltype }) => radioValues.includes(fueltype));
      }
     
     
  }
  
  else{
 if(radioValues.length >= 1){

filteredStores = data.filter(({ fueltype }) => radioValues.includes(fueltype));

if(checkedValues.length > 0){
  filteredStores =  filteredStores.filter(({ car_Name }) => checkedValues.includes(car_Name));
}

 }
 else{
  filteredStores =  data.filter(({ car_Name }) => checkedValues.includes(car_Name));
 }
   
  }
  console.log(filteredStores);
  if(checkedValues.length > 0){
   
    renderHtml(filteredStores);
  }
  else if(radioValues.length > 0){
    renderHtml(filteredStores);
  }
  else{
    renderHtml(data);
  }
 
}

function filteredPrices(val) {
  document.getElementById('textInput').value=val; 
  const items = document.querySelectorAll('.products');
  const searchMin = Number(document.getElementById('min').min);
  const searchMax = Number(document.getElementById('textInput').value);
  items.forEach(item =>
  {
    const price = Number(item.querySelector('.price').textContent);
    
    if ( price > searchMax)
      item.style.display = 'none';
    else
      item.style.display = 'flex';
  });
}


