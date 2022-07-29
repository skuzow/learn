import { Product, calculateISV } from './06-function-destructuration';


const shoppingCart: Product[] = [
    {
        description: 'Telephone 1',
        price: 100
    },
    {
        description: 'Telephone 2',
        price: 150
    }
];

const [ total, isv ] = calculateISV(shoppingCart);

console.log('Total', total);
console.log('ISV', isv);
