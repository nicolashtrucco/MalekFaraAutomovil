import "../Vehículos/mainVehiculos.scss";
import ItemListContainer from "../../ItemListContainer/ItemListContainer";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";


const MainVehiculos = () => {
  const [search, setSearch] = useState("");

  //* Obtiene el valor del input
  
  const handleInput = (e) => {
    setSearch(e.target.value); 
  };

  return (
    <div className="mainVehiculos-container">
        <div className="mainVehiculos-searchs">
            <div className="mainVehiculos-search">
                <CiSearch className="mainVehiculos-iconSearch"/>

            </div>
      <input
        value={search}
        onChange={handleInput}
        type="text"
        placeholder='Buscar...'
        className="mainVehiculos-input"
      />

        </div>

        
      <ItemListContainer search={search} />
    </div>
  );
};

export default MainVehiculos;
