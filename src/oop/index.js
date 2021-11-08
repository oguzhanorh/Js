class Customer{
    constructor(id,customerNumber){
        this.id =id;
        this.customerNumber=customerNumber;
    }
}
let customer = new Customer(1,"12345");
//prototyping
customer.name="Oguzhan ORHAN"
console.log(customer.name)

console.log(customer.customerNumber)

class IndividualCustomer extends Customer{
    constructor(firstName,id,customerNumber){
    super(id,customerNumber)
   this.firstName =firstName
    }
}
class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
    super(id,customerNumber)
    this.companyName = companyName   //interitace
    }

}

let products=[
    {id:1, name: "Acer Laptop",unitPrice:15000},
    {id:2, name: "Asus Laptop",unitPrice:15000},
    {id:3, name: "Dell Laptop",unitPrice:15000},
    {id:4, name: "Lenovo Laptop",unitPrice:15000},
    {id:5, name: "Casper Laptop",unitPrice:15000},

]
console.log("<ul>")
products.map(product=>console.log('<li>${product.name}</li>'))
console.log("</ul>") 