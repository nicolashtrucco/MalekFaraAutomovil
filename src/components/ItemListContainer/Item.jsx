/** @format */

import '../ItemListContainer/item.scss'
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
   return (
      <div className="item-container">
         <img className='item-img' src={product.img[0]} alt={product.id} />
         <h1 className='item-name'>{product.name}</h1>
         <Link className='item-buttom' to={`/Vehiculos/${product.id}`}>Ver Vehículo</Link>
      </div>
   );
};

export default Item;
