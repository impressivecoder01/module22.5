//(optional) explore what you can do with javascript object
const student = {
    name: 'sakib',
    id: 100,
    address: 'dhaka',
    isMarried: true,
    friends: ['a', 'b', 'c', 'd', 's'],
    movies: [{name: '1', year: 2020, income: 0}, {name: '2', year: 3030, income: 33}],
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