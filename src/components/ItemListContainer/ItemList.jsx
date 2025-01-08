import Item from "./Item"
import '../ItemListContainer/itemList.scss'

const ItemList = ({products}) => {
  return (
    <div className="itemList-container">
        {
            products.map((product) => (
                <div key={product.id}>
                    <Item product={product}/>
                </div>
            ))
        }
    </div>
  )
}

export default ItemList