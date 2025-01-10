const products = [
    {
        id: 'Ferrari-Roma-Spider',
        name: 'Ferrari Roma Spider',
        description: 'El Ferrari Roma es un spider 2+ equipado con una capota de tela extremadamente refinada, diseñada para preservar y realzar las proporciones del Ferrari Roma sin alterar su elegante y fluida silueta.',
        img:['../../src/assets/Ferrari-Roma-Spider-00.webp'],
        category: 'Ferrari'
    },
    {
        id: 'Ferrari-296-GTS',
        name: 'Ferrari 296 GTS',
        description: 'El Ferrari 296 GTS es un spider 2+ equipado con una capota de tela extremadamente refinada, diseñada para preservar y realzar las proporciones del Ferrari Roma sin alterar su elegante y fluida silueta.',
        img:['../../src/assets/Ferrari-296-GTS-00.webp'],
        category: 'Ferrari'
    },
    {
        id: 'Ferrari-296-GTB',
        name: 'Ferrari 296 GTB',
        description: 'El Ferrari 296 GTB es un spider 2+ equipado con una capota de tela extremadamente refinada, diseñada para preservar y realzar las proporciones del Ferrari Roma sin alterar su elegante y fluida silueta.',
        img:['../../src/assets/Ferrari-296-GTB-00.webp'],
        category: 'Ferrari'
    },
    {
        id: 'Ferrari-488-GTB',
        name: 'Ferrari 488 GTB',
        description: 'El Ferrari 488 GTB es un spider 2+ equipado con una capota de tela extremadamente refinada, diseñada para preservar y realzar las proporciones del Ferrari Roma sin alterar su elegante y fluida silueta.',
        img:['../../src/assets/Ferrari-488-GTB-00.webp'],
        category: 'Ferrari'
    },
    {
        id: 'Ferrari-Portofino',
        name: 'Ferrari Portofino',
        description: 'El Ferrari Portofino es un spider 2+ equipado con una capota de tela extremadamente refinada, diseñada para preservar y realzar las proporciones del Ferrari Roma sin alterar su elegante y fluida silueta.',
        img:['../../src/assets/Ferrari-Portofino-00.webp'],
        category: 'Ferrari'
    },
    {
        id: 'Ferrari-Roma-Coupe',
        name: 'Ferrari Roma Coupe',
        description: 'El Ferrari Roma Coupe es un spider 2+ equipado con una capota de tela extremadamente refinada, diseñada para preservar y realzar las proporciones del Ferrari Roma sin alterar su elegante y fluida silueta.',
        img:['../../src/assets/Ferrari-Roma-Coupe-00.webp'],
        category: 'Ferrari'
    },
    
]


//? Obtener Productos
const getProducts = () => {
    return new Promise((res, rej) => {
        //* Simular Retraso de Red
        // setTimeout(()=>{
            res(products)
        // },1000)
    })
}

export {getProducts}