import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './detalles.css'


export const Detalles = () =>{
    const [info, setInfo] = useState([])
    const params = useParams()
    console.log(params)
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get("https://ecomerce-master.herokuapp.com/api/v1/item/${params.id}");
                setInfo(data);
            } catch (error) {
            console.log("error API", error);
            }
        })();
    }, []);
      
    return (
        <>
        <div className='App App-header' class="container">   
                <div>
                    <img  src={info.image} className="card-img-top" alt='imagenProducto'/>
                    <div class="info">
                        <p>
                            Name: {info.product_name}
                            Stock: {info.isActive}
                            Category: {info.category}
                            Brand: {info.brand}
                            Description: {info.description}
                            Price: {info.price}
                        </p> 
                    </div>
                </div>   
        </div>
        </>
    )
}