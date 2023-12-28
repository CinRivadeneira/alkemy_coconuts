import React, { useState, useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Carrito from './Carrito';
import DataContext from '../components/context/DataContext';


const IconoCarrito = () => {
    //Indica si el componente debe mostrarse o no.
    const [mostrarCarrito, setMostrarCarrito] = useState(false);

    //Función para cambiar el estado al presionar sobre el ícono, mostrándolo.
    const handleCarritoClick = () => {
        setMostrarCarrito(!mostrarCarrito);
    };

    //Utilizo el hook para mostrar los elementos del carrito al hacer clic sobre el ícono del mismo 
    const { allProducts, itemsCarrito, setItemsCarrito } = useContext(DataContext);


    return (
        <>
            <br />
            <br />
            <div>
                <h4>VER CARRITO</h4>
                <FaShoppingCart className='iconCarrito' onClick={handleCarritoClick} />
                {mostrarCarrito && <Carrito onClose={handleCarritoClick} />}
                <div />
            </div>
        </>
    );
};

export default IconoCarrito;