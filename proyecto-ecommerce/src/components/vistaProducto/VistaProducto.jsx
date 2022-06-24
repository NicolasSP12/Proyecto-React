import { Link } from "react-router-dom";
import Button from "../boton/Button";

const VistaProducto = (props) => {
    const {nombre, imagen, id} = props
    return(
        <>
         
            <div className='col' key={id}>
                <div className='borde'>
                    <img  src={imagen} className="card-img-top" alt='imagenesProductos'/>
                    <h5>
                    {nombre}
                    </h5> 
                    <Link to={id}>
                    <Button/>
                    </Link>
                </div>
            </div>  
              
        </>  
    )
}

export default VistaProducto
