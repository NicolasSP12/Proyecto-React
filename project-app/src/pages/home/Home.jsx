import axios from 'axios';
import Button from '../../assets/boton/Button';
import React, { useEffect, useState } from 'react';
import "./Home.css"
import Carrusel from '../../assets/carrusel/Carrusel';

export const HomeScreen = ({name, foto}) => {

  const [info, setInfo] = useState([])

    useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://ecomerce-master.herokuapp.com/api/v1/item"
        );
        setInfo(data.slice(0,20));
      } catch (error) {
        console.log("error API", error);
      }
    })();
  }, []);

  return (
    <>
    <Carrusel/>
    <div className='App App-header row row-cols-1 row-cols-md-4 g-4'>
      {info.map((n)=>(   
        <div className='col' key={n._id}>
          <div className='borde'>
            <img  src={n.image} className="card-img-top" alt='imagenesProductos'/>
            <p onClick={() => name(n._id, 40)}>
            {n.product_name}
            </p> 
            <Button id={n._id}/>
          </div>
        </div>  
      ))} 
    </div>
    </> 
  )    
}