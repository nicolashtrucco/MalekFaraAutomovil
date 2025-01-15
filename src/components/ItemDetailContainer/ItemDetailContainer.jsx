import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import db from "../../dataDb/dataDb"
const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {idVehiculos} =useParams()
    
    const getProduct = () => {
      const docRef = doc(db, 'productos', idVehiculos)
      getDoc(docRef)
      .then((dataDb)=>{
        const productDb = {id: dataDb.id, ...dataDb.data()}
        setProduct(productDb)
      })
    }

    useEffect( ()=> {
        getProduct()
        
    }, [])
    
  return (
    <div>
       <ItemDetail product={product}/>
    </div>
  )
}

export default ItemDetailContainer