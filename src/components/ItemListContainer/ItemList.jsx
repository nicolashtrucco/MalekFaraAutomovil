import Item from "./Item"
import '../ItemListContainer/itemList.scss'
import { Link } from "react-router-dom"
Link

const ItemList = ({products}) => {
  return (
    <div className="itemList">
    
    <div className="itemList-container">
        {
            products.map((product) => (
                <div key={product.id}>
                    <Item product={product}/>
                </div>
            ))
        }
    </div>
        
    </div>
  )
}

export default ItemList