import { getProducts } from "../../data/data.js";
import { useState, useEffect } from "react";
import ItemList from "./ItemList.jsx";
import '../ItemListContainer/itemListContainer.scss'
import { Link } from "react-router-dom";

const ItemListContainer = ({ limit }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
        .then((data)=> {
            const slicedProducts = limit ? data.slice(0, limit) : data; 
                setProducts(slicedProducts);        
        })
        .catch((error)=>{
            console.log(error);
        })
        .finally(()=>{
            console.log('Finalizo');
        })
    }, [limit])


    
  return (
    <div className="itemListContainer-container">
        <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer