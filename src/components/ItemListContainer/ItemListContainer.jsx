// import { getProducts } from "../../data/data.js";
import { useState, useEffect } from "react";
import ItemList from "./ItemList.jsx";
import "../ItemListContainer/itemListContainer.scss";
import { LuSearchX } from "react-icons/lu";
import { collection, getDocs } from "firebase/firestore";
import db from "../../dataDb/dataDb.js";

const ItemListContainer = ({ limit, search }) => {
  const [products, setProducts] = useState([]); //* Todos los productos
  const [filteredProducts, setFilteredProducts] = useState([]); //* Productos filtrados

  const getProducts = () => {
    const collectionName = collection(db, "productos");
    getDocs(collectionName)
      .then((data) => {
        const productsDb = data.docs.map((productDb) => ({
          id: productDb.id,
          ...productDb.data(),
        }));
  
        // Aplicar el límite si está definido
        const slicedProducts = limit ? productsDb.slice(0, limit) : productsDb;
        setProducts(slicedProducts);
      })
      .catch((error) => console.error("Error al obtener productos:", error));
  };
  
  useEffect(() => {
    getProducts();
  }, [limit]); // Ejecutar cuando cambie el valor de limit

  useEffect(() => {
    if (search) {
      const filtered = products.filter((product) =>
        (product.name?.toLowerCase() || "").includes(search.toLowerCase()) ||
        (product.carroceria?.toLowerCase() || "").includes(search.toLowerCase()) ||
        (product.category?.toLowerCase() || "").includes(search.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [search, products]);

  return (
    <div className="itemListContainer-container">
      {filteredProducts.length > 0 ? (
        <ItemList products={filteredProducts} />
      ) : (
        <div className="itemListConatiner-parrafo">
        <LuSearchX/>
        <p>No se han encontrado productos que coincidan con tu búsqueda.</p>
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
