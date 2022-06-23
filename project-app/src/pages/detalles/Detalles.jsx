import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './detalles.css'

export const Detalles = () =>{
    const [info, setInfo] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get("https://ecomerce-master.herokuapp.com/api/v1/item");
                setInfo(data);
            } catch (error) {
            console.log("error API", error);
            }
        })();
    }, []);
      
    return (
        <>
        <div className='App App-header' class="container">
            {info.map((productoSelecto)=>(   
                <div>
                    <img  src={productoSelecto.image} className="card-img-top" alt='imagenProducto'/>
                    <div class="info">
                        <p>
                            Name: {productoSelecto.product_name}
                            Stock: {productoSelecto.isActive}
                            Category: {productoSelecto.category}
                            Brand: {productoSelecto.brand}
                            Description: {productoSelecto.description}
                            Price: {productoSelecto.price}
                        </p> 
                    </div>
                </div>  
            ))} 
        </div>
        </>
    )
}