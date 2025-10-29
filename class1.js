//(optional) explore what you can do with javascript object
const student = {
    name: 'sakib',
    id: 100,
    address: 'dhaka',
    isMarried: true,
    friends: ['a', 'b', 'c', 'd', 's'],
    movies: [{name: '1', year: 2020, income: 0}, {name: '2', year: 3030, income: 33}],
    act: function (){return console.log('testing')},
    car: {
        brand: 'tesla',
        price: 444444444,
        made: 2020,
        manufacturer: {
            name: 'tesla',
            ceo: 'elon mask',
            country: 'usa'
        }
    }
}
console.log(student)
console.log(student.car)
console.log(student.friends)
console.log(student.car.manufacturer)
console.log(student.movies[0].name)
console.log(student.act())

const products = [
    {name: 'laptop', price: 1200},
    {name: 'phone', price: 3000}
]
console.log(products[0])
console.log(products[1])

function add(num1, num2){
    console.log(num1, num2)
    console.log(arguments)
    console.log(arguments[2])
}
add(12,22)
add(12,22,33,45,64,4)