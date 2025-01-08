import { getProducts } from "../../data/data.js";
import { useState, useEffect } from "react";
import ItemList from "./ItemList.jsx";
import '../ItemListContainer/itemListContainer.scss'

const ItemListContainer = ({ }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
        .then((data)=> {
            setProducts(data);        
        })
        .catch((error)=>{
            console.log(error);
        })
        .finally(()=>{
            console.log('Finalizo');
        })
    }, [])


    
  return (
    <div className="itemListContainer-container">
        <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer