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
                <img src={info.image} className="card-img-top" alt='imagenProducto'/>
                <div className="info">
                    <p className="no_space">
                        <span>Price:</span> ${info.price} 
                        <br /> <br />
                        <span>Name:</span> {info.product_name} 
                        <br /> <br />
                        <span>Brand:</span> {info.brand} 
                        <br /> <br />
                        <span>Category:</span> {info.category} 
                        <br /> <br />
                        <span>Description:</span> {info.description} 
                        <br /> <br />
                    </p>
                    <button className='buy'>Buy</button> 
                </div>
            </div>   
        </div>
        </>
    )
}