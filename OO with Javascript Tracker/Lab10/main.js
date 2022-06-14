class Compnay{
    constructor(name){
        this.name = name;
        this.company = "";
    }
}
class Item{
    constructor(itemName,price){
        this.itemName = itemName;
        this.price = price;
    }
}

class OrderItem{
    constructor(productName, quantity){
        this.productName = productName;
        this.quantity = quantity
    }
}

class Order{
    constructor(orderItem){
        this.orderItem = orderItem;
        this.customer = "";
    }
}

class Customer{
    constructor(name,type){
        this.customerName = name;
        this.customerType = type;
        this.company_name = "";
    }
}

var company1 = new Compnay("Amazon");
var item1 = new Item("bag",500);
var item2 = new Item("books",1000);
var item3 = new Item("pen",200);
var item4 = new Item("box",100);

company1 = {...company1,item1, item2,item3,item4}



var orderitem1 = new OrderItem("bag",3);
var orderitem2 = new OrderItem("books",4);

var order1 = new Order({orderitem1, orderitem2})

var orderitem3 = new OrderItem("pen",4);
var orderitem4 = new OrderItem("box",5);

var order2 = new Order({orderitem3, orderitem4})

var customer1 = new Customer("Shaurya","non-registered")
var customer2 = new Customer("Agnihotri","registered")

order1.customer = customer1;
order2.customer = customer2;

customer1.company_name = company1.name;
customer2.company_name = company1.name;



console.log("order 1",order1)
console.log("order2",order2)

console.log(customer1, customer2)
console.log(company1);

var mainDiv = document.getElementById('info');

var innerDiv = document.createElement('div');
innerDiv.innerHTML="Restaurant name is:"+customer1.company_name +"<br>"+"customer is:"+customer1.customerName+
"<div>"+"customerid is: 1"+"</div>"+"<div>"+"orderid is: 1"+"</div>"+"<div>"+"ordered quantity of item1:"+orderitem1.quantity+"</div>"
+"ordered quantity of item2:"+orderitem2.quantity+"</div>"+"<div>"+"description(item1) is:"+orderitem1.productName+"</div>"+"description(item2) is:"+orderitem2.productName+"</div>"
+"<div>"+"price of item1 is:"+company1.item1.price+"</div>"+"<div>"+"price of item2 is:"+company1.item2.price+"</div>"+"<div>"+"iteamid for item1:1"+"</div>"+"<div>"+"iteamid for item2:2"+"</div>"
+"<br>"+"reg customer is:"+customer2.customerName+
"<div>"+"customerid is: 2"+"</div>"+"<div>"+"orderid is: 2"+"</div>"+"<div>"+"ordered quantity:"+orderitem3.quantity+"</div>"
+"ordered quantity:"+orderitem4.quantity+"</div>"+"<div>"+"description(item1 in order2) is:"+orderitem3.productName+"</div>"+"description(item2 in order2) is:"+orderitem4.productName+"</div>"
+"<div>"+"price of item3 is:"+company1.item3.price+"</div>"+"<div>"+"price of item4 is:"+company1.item4.price+"</div>"+"<div>"+"iteamid for item3:3"+"</div>"+"<div>"+"iteamid for item4:4"+"</div>";
mainDiv.appendChild(innerDiv);

