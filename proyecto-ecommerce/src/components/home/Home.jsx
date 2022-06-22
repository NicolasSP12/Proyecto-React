import axios from 'axios';
import Button from '../boton/Button';
import { useEffect, useState } from 'react';
import "./App.css"
import Carrusel from '../carrusel/Carrusel';

export const HomeScreen = ({name, foto}) => {

  const [info, setInfo] = useState([])

    useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://ecomerce-master.herokuapp.com/api/v1/item"
        );
        setInfo(data);
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
        <div className='col'>
          <div className='borde'>
            <img  src={n.image} className="card-img-top" alt='imagenesProductos'/>
            <p  key={n._id} onClick={() => name(n._id, 40)}>
            {n.product_name}
            </p> 
            <Button/>
          </div>
        
        </div>  
      ))} 
    </div>
    </>
    
  )

    
}