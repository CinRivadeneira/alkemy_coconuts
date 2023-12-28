import React from 'react';
import { useContext, useState } from "react";
import DataContext from '../components/context/DataContext'
import datos from "../datos.json"
import { FaTrash } from "react-icons/fa";
import Formulario from "./Formulario" 


//Defino que en este componente se recibirá la prop 'onClose' para cerrar el carrito.
const Carrito = ({ onClose }) => {
    const { allProducts, itemsCarrito, setItemsCarrito, onAddProduct, onRemoveProduct, deleteProduct } = useContext(DataContext);

//Función que calcula el total de la compra sumando el precio del producto por la cantidad.
    const totalCompra = () => {
        return itemsCarrito.reduce((total, item) => {
            return total + item.precio * item.quantity;
        }, 0);
    };

//Con esta función calculamos el total de los productos dentro del carrito.
    const totalProductos = () => {
        return itemsCarrito.reduce((quantity, item) => {
            return quantity + item.quantity;
        }, 0);
    };


//Estado local para la visualización del formulario.
    const [form, setForm] = useState(false)
    //Verificando si el carrito está vacío. Mientras lo esté el botón para realizar la compra y rellenar el formulario estará desactivado, activándose recién cuando exista un mínimo de un producto en el carrito.
    const isCartEmpty = itemsCarrito.length ===0;

    return (
        <div>
            <br />
            <br />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {itemsCarrito.map((item) => (
                        <tr key={`product-${item.id}`}>
                            <td> {item.nombreProducto} </td>
                            <td>{item.quantity}</td>
                            <td> $ {(item.precio) * (item.quantity)}  </td>
                            <td>
                                <button onClick={() => onAddProduct(item)} >+</button>
                                <button onClick={() => onRemoveProduct(item)}>-</button>
                                <FaTrash onClick={() => deleteProduct(item)} className='basurero' />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='detalleCompra'>
                <p className='totalCompra'> Poductos: ({totalProductos()})  </p>
                <p className='totalCompra'> — </p>
                <p className='totalCompra'>Total: ${totalCompra()} </p>
            </div>
            <button onClick={onClose} className="btn btn-primary"> Comprimir carrito</button>
            <button
                onClick={() => setForm(!form)} 
                className="btn btn-primary"
                disabled={isCartEmpty} > 
                    Realizar compra 
                </button>
            {form && !isCartEmpty && <div>
                <Formulario />
            </div>}
        </div>
    );
};

export default Carrito;



