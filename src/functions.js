function addToCart(quantity, productName = "Elma") {
    console.log("Sepete eklendi : ürün : " + productName + " adet : " + quantity)
}

// addToCart()
addToCart(10)
// addToCart(15)

let sayHello = () => {
    console.log("Hello world!")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello world 2")
}

sayHello2()

function addToCart2(productName, quantity, unitPrice) {

}

addToCart2("Elma", 5, 10)
addToCart2("Armut", 2, 20)
addToCart2("Limon", 3, 15)

function addToCart3(product) {
    console.log("Ürün : " + product.productName)
    console.log("Adet : " + product.quantity)
    console.log("Fiyat : " + product.unitPrice)
}

let product1 = { productName: "Elma", quantity: 5, unitPrice: 10 }

addToCart3(product1)

let product2 = { productName: "Elma", quantity: 5, unitPrice: 10 }
let product3 = { productName: "Elma", quantity: 5, unitPrice: 10 }
product2 = product3
product2.productName = "karpuz"
console.log(product3.productName)

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)

function addToCart4(products) {
    console.log(products)
    
}

let products = [
    { productName: "Elma", quantity: 5, unitPrice: 10 },
    { productName: "Armut", quantity: 5, unitPrice: 10 },
    { productName: "Karpuz", quantity: 5, unitPrice: 10 },
]

addToCart4(products)

function add(bisey, ...numbers) { // rest operatörü
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
    console.log(bisey)
}

add(20, 30)
// add(20, 30, 40)
// add(20, 30, 40, 50)

let numbers = [30, 10, 500, 600, 120]
// console.log(...numbers);
console.log(Math.max(...numbers))

let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri, marmaraSehirleri, karadenizSehirleri]] = [
    { name: "İç Anadolu", population: "20M"}, 
    { name: "Marmara", population: "30M"}, 
    { name: "Karadeniz", population: "10M"},
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"],
        ["Sinop", "Tranbzon"],
    ]
]
console.log(icAnadolu.name);
console.log(icAnadolu.population);
console.log(marmara);
console.log(marmara); 
console.log(icAnadoluSehirleri); 

let newProductName, newQuantity, newUnitPrice
({productName:newProductName, quantity:newQuantity, unitPrice:newUnitPrice} = { productName: "Elma", quantity: 5, unitPrice: 10 })

console.log(newProductName);
console.log(newQuantity);
console.log(newUnitPrice);