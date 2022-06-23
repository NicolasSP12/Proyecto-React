import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './detalles.css'


export const Detalles = () =>{
    const [info, setInfo] = useState([])
    const params = useParams()
    console.log(params.id)
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get("https://ecomerce-master.herokuapp.com/api/v1/item/'{params.id}'");
                setInfo(data);
            } catch (error) {
            console.log("error API", error);
            }
        })();
    }, []);
    
    
      
    return (
        <>
        <div>   
            <div className="container">
                <img src={params.image} className="card-img-top image" alt='imagenProducto'/>
                <div className="info">
                    <p className="no_space">
                        Name: {params.product_name} <br />
                        Stock: {params.isActive} <br />
                        Category: {params.category} <br />
                        Brand: {params.brand} <br />
                        Description: {params.description} <br />
                        Price: {params.price} <br />
                    </p> 
                </div>
            </div>   
        </div>
        </>
    )
}