
interface Product {
    description: string;
    price: number;
}

const telephone: Product = {
    description: 'Nokia A1',
    price: 150
}

const tablet: Product = {
    description: 'iPad Air',
    price: 350
}

function calculateISV(products: Product[]): [number, number] {
    let total = 0;
    products.forEach(({ price }) => {
        total += price;
    });
    return [total, total * 0.15];
}

const articles = [ telephone, tablet ];

const [ total, isv ] = calculateISV(articles);

console.log('Total:', total);
console.log('ISV:', isv);
