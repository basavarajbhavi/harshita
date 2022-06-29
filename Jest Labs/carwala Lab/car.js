var data = [];

/*FETCH DATA*/
const fetchData = async () => {
    try {
        const response = await fetch("car.json");
        this.data = await response.json();
        console.log(data);
        readHtml(this.data);
        bindCheckBox(this.data);
    }
    catch (e) {
        console.log("something went wrong!", e);
    }
}
fetchData();

/*DISPLAY FETCHED DATA ON FRONTEND*/
function readHtml(data) {
    document.getElementById("data").innerHTML = "";
    var DataElement = document.getElementById("data");
    var textToAdd = document.createElement("div");
    textToAdd.className = "car-container";
    DataElement.appendChild(textToAdd);
    for (let i = 0; i < data.length; i++) {
        var path = "images/" + data[i].name + ".jpg"
        var products = document.createElement("div");
        products.className = "products" + " index" + i + " " + "d-flex"
        textToAdd.appendChild(products);
        var imgDiv = document.createElement("div");
        imgDiv.className = "img"
        products.appendChild(imgDiv);
        var innerimgDiv = document.createElement("div");
        innerimgDiv.className = "inner-img"
        innerimgDiv.setAttribute("style", "background-image: url(" + path + ");background-repeat: no-repeat");
        imgDiv.appendChild(innerimgDiv);
        var carInfo = document.createElement("div");
        carInfo.className = "car-info"
        products.appendChild(carInfo);
        var carname = document.createElement("div");
        carname.className = "name";
        carname.innerHTML = data[i].name;
        carInfo.appendChild(carname);
        var carmodel = document.createElement("div");
        carmodel.className = "model";
        carmodel.innerHTML = "Model: " + data[i].model;
        carInfo.appendChild(carmodel);
        var carprice = document.createElement("div");
        carprice.className = "price";
        carprice.innerHTML = data[i].price;
        carInfo.appendChild(carprice);
        var carusage = document.createElement("div");
        carusage.className = "usage_Details";
        carusage.innerHTML = data[i].usage;
        carInfo.appendChild(carusage);
    }
}

function bindCheckBox(data) {
    var DataElement = document.getElementById("brands");
    var uniqueName = data.filter((value, index, self) => {
        return (
            self.findIndex((v) => v.name === value.name) === index
        );
    });
    console.log(uniqueName);
    for (let i = 0; i < uniqueName.length; i++) {
        var checkBoxDiv = document.createElement("div");
        checkBoxDiv.className = "checkbox-container"
        DataElement.appendChild(checkBoxDiv);
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.className = "checkbox"
        checkbox.name = uniqueName[i].name;
        checkbox.value = uniqueName[i].name;
        checkbox.id = "label" + i
        checkbox.addEventListener("change", removeRow, false);
        var label = document.createElement('label')
        label.htmlFor = "id";
        label.appendChild(document.createTextNode(uniqueName[i].name));

        checkBoxDiv.appendChild(checkbox);
        checkBoxDiv.appendChild(label);
    }
}

function removeRow(btntype) {
    var filteredStores;

    const checkedValues = [...document.querySelectorAll('.checkbox')]
        .filter(input => input.checked)
        .map(input => input.value);
    const radioValues = [...document.querySelectorAll('.radioBtn')]
        .filter(input => input.checked)
        .map(input => input.value);
    if (btntype == 'radioBtn') {
        if (checkedValues.length >= 1) {
            filteredStores = data.filter(({ name }) => checkedValues.includes(name));
            filteredStores = filteredStores.filter(({ fueltype }) => radioValues.includes(fueltype));
        }
        else {
            filteredStores = data.filter(({ fueltype }) => radioValues.includes(fueltype));
        }
    }

    else {
        if (radioValues.length >= 1) {

            filteredStores = data.filter(({ fueltype }) => radioValues.includes(fueltype));

            if (checkedValues.length > 0) {
                filteredStores = filteredStores.filter(({ name }) => checkedValues.includes(name));
            }

        }
        else {
            filteredStores = data.filter(({ name }) => checkedValues.includes(name));
        }

    }
    console.log(filteredStores);
    if (checkedValues.length > 0) {
        readHtml(filteredStores);
    }
    else if (radioValues.length > 0) {
        readHtml(filteredStores);
    }
    else {
        readHtml(data);
    }
}

function filteredPrices(val) {
    document.getElementById('textInput').value = val;
    const items = document.querySelectorAll('.products');
    const searchMin = Number(document.getElementById('min').min);
    const searchMax = Number(document.getElementById('textInput').value);
    items.forEach(item => {
        const price = Number(item.querySelector('.price').textContent);

        if (price > searchMax)
            item.style.display = 'none';
        else
            item.style.display = 'flex';
    });
}

