import { getProducts } from "../../data/data.js";
import { useState, useEffect } from "react";
import ItemList from "./ItemList.jsx";
import "../ItemListContainer/itemListContainer.scss";
import { LuSearchX } from "react-icons/lu";

const ItemListContainer = ({ limit, search }) => {
  const [products, setProducts] = useState([]); //* Todos los productos
  const [filteredProducts, setFilteredProducts] = useState([]); //* Productos filtrados

  useEffect(() => {
    getProducts()
      .then((data) => {
        const slicedProducts = limit ? data.slice(0, limit) : data;
        setProducts(slicedProducts);
        // Inicializa ambos estados
        setFilteredProducts(slicedProducts); 
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("Finalizó la carga de productos");
      });
  }, [limit]);

  useEffect(() => {
    if (search) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
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
