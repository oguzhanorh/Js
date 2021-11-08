//let students2 =[student,{id:2, name:"Oguz"},"Ankara",{city:"İstanbull"}]
//console.log(students2)


let showProducts = function(id,...products){
    console.log(id)
    console.log(products)
}
//console.log(typeof showProducts)
//showProducts(10,["Elma","Karpuz"])
 let points = [1,2,3,4,50,4,60,14]
 console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")


let populations = [10000, 20000, 30000,[40000,100000]]
let [small, medium, high,arr] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(arr[0])
console.log(arr[1])

function someFunction([small1],number){
console.log(small1)

}
someFunction(populations)

let category = {id:1, name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name} = category
console.log(id)
console.log(name)
