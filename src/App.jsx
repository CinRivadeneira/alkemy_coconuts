import { useState, useEffect } from 'react'
import './App.css'
import Products from './components/Products'
import DataContext from './components/context/DataContext'
import datos from "./datos.json";
import IconoCarrito from './components/IconCarrito';



function App() {
  //estados del componente.
  const [allProducts, setAllProducts] = useState([])
  const [itemsCarrito, setItemsCarrito] = useState([])
  const [total, setTotal] = useState(0)
  const [countProducts, setcountProducts] = useState(0)
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  //Funciones para permitir la manipulación del carrito de compras.
  //*Agrega un producto*
  const onAddProduct = (product) => {
    const index = itemsCarrito.findIndex((item) => item.id == product.id);
    if (index == -1) {
      setItemsCarrito([...itemsCarrito, product])
    } else {
      product.quantity++
      setItemsCarrito([...itemsCarrito])
    }
    console.log("Producto agregado exitosamente!");
    console.log(itemsCarrito)
  };
  //*Quita un producto*
  const onRemoveProduct = (product) => {
    const index = itemsCarrito.findIndex((item) => item.id == product.id);
    if (product.quantity > 1) {
      product.quantity--
      setItemsCarrito([...itemsCarrito])
    } else {
      const newItemsCarrito = [...itemsCarrito]
      newItemsCarrito.splice(index, 1)
      setItemsCarrito(newItemsCarrito)
    }
  }
  //*Remueve el producto*
  const deleteProduct = (product) => {
    const index = itemsCarrito.findIndex((item) => item.id == product.id);
    const newItemsCarrito = [...itemsCarrito]
    newItemsCarrito.splice(index, 1)
    setItemsCarrito(newItemsCarrito)
  }
  //Finaliza funciones del carrito de compras.


  //Utilizo el hook para cargar los datos detallados importados desde el json.
  useEffect(() => {
    setAllProducts(datos);
  }, []);

  //Este objeto contiene los datos y funciones que pasan al contexto.
  const data = { datos, allProducts, itemsCarrito, setItemsCarrito, onAddProduct, onRemoveProduct, deleteProduct }

  return (
    <>
      <h1> COCONUTS </h1>
      <h3> Tazas de diseño</h3>
      <DataContext.Provider value={data}>
        <Products />
        <IconoCarrito />
      </DataContext.Provider>
      <br />
      <br />
    </>
  )
}

// Los componentes hijos van dentro del CONTEXTO para poder acceder a los datos requeridos.

export default App;



