import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import VistaProducto from '../vistaProducto/VistaProducto'

export default function Form() {

    const [producto, setProducto] = useState([])
    const [search, setsearch] = useState([])

    useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://ecomerce-master.herokuapp.com/api/v1/item"
        );
        setsearch(data);
        setProducto(data);
      } catch (error) {
        console.log("error API", error);
      }
    })();
    }, []);

    const handleChange = e => {
        setsearch(e.target.value)
        filtrar(e.target.value)
        console.log(e.target.value);
    }

    const filtrar = (terminoBusqueda) => {
        var resultadoBusqueda = producto.filter((p)=>{
            if(p.product_name.toString().toLowerCase().includes(terminoBusqueda)){
                return p
            }
        }) 
        setProducto(resultadoBusqueda)
        console.log(resultadoBusqueda);
    }

  return (
    <>
    <div>
        <div className='vistas'>
            <form className="d-flex" role="search">
                <input 
                className="form-control-2 me-2" 
                type="search" 
                placeholder="Search" 
                aria-label="Search"
                onChange = {handleChange}
                /> 
                <button type="button" class="btn btn-info">Search</button>
            </form>
          </div>
          
          <div className='App App-header row row-cols-1 row-cols-md-5 g-4'>{

            producto.length === 0 
            ? <h2>menus </h2>
            : producto.map(product => {
              return(
                
                <div> 
                  <VistaProducto key={product._id} id={product._id} nombre={product.product_name} imagen={product.image}/>
                </div>
         
              )
            }).splice(0,20)}
          </div>    
      </div>
    </>   
  )
}

