import { useState, useEffect } from "react"
import { getproduct } from "../../data/data"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {idVehiculos} =useParams()    

    useEffect( ()=> {
        getproduct(idVehiculos)
        .then((data)=> setProduct(data))
    }, [])
    
  return (
    <div>
       <ItemDetail product={product}/>
    </div>
  )
}

export default ItemDetailContainer