//(advanced) find the matching product by searching products
const numbers = [2,3,45,67,88,9];
for(let i = 0; i<numbers.length; i ++){
    const number = numbers[i]
    console.log(number)
}

for(const number of numbers){
    console.log(number,'s')
}

const products = [
    {id: 1, name: 'walton phone', price: 190007},
    {id: 2, name: 'walton2 Phone', price: 190006},
    {id: 3, name: 'walton3', price: 190005},
    {id: 4, name: 'walton4 phone', price: 190004},
    {id: 5, name: 'walton5', price: 190003},
    {id: 8, name: 'walton7', price: 190002},
    {id: 9, name: 'walton68', price: 190002},
    {id: 10, name: 'walton69', price: 190002},
    {id: 11, name: 'walton60', price: 190002},
    {id: 12, name: 'walton600 phone', price: 190002},
    {id: 13, name: 'walton6000 Phone', price: 190002},
];
for(const product of products){
    // console.log(product)
}
function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.includes(search.toLowerCase())){
            matched.push(product)
        }
    }
    return matched
}
const result = matchedProducts(products, 'phone')
console.log(result, 'ss')