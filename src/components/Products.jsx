import { useContext, useState } from "react";
import DataContext from '../components/context/DataContext'
import datos from "../datos.json"


const Products = () => {
  const { allProducts, itemsCarrito, setItemsCarrito, onAddProduct } = useContext(DataContext);

  return (
      <div className='productos'>
      {/* Iteramos sobre el array del json para renderizar cada producto según su característica de id, nombre, descripción, precio e imagen */}
        {datos.map((product) => (
          <div className='productCard' key={`product-${product.id}`}>
            <figure>
              <img width='200' src={product.imagen} alt={product.nombreProducto} />
            </figure>
            <div>
              <h4>{product.nombreProducto}</h4>
              <p>{product.descripcionProducto}</p>
              <h4>${product.precio}</h4>
              <button id="añadir" className="btn btn-primary" onClick={() => onAddProduct(product)}>
                Añadir al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
  )
}

export default Products;
