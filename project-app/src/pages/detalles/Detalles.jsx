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
                const { data } = await axios.get(`https://ecomerce-master.herokuapp.com/api/v1/item/${params.id}`);
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
                <img src={info.image} className="card-img-top image" alt='imagenProducto'/>
                <div className="info">
                    <p className="no_space">
                        Name: {info.product_name} <br />
                        Category: {info.category} <br />
                        Brand: {info.brand} <br />
                        Description: {info.description} <br />
                        Price: ${info.price} <br />
                    </p> 
                </div>
            </div>   
        </div>
        </>
    )
}