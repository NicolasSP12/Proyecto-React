import { Link } from "react-router-dom";
import Button from "../boton/Button";

const VistaProducto = (props) => {
    const {nombre, imagen, id} = props
    return(
        <>
        <div className=''> 
            <div className='col' key={id}>
                <div className='borde'>
                    <img  src={imagen} className="card-img-top" alt='imagenesProductos'/>
                    <h5>
                    {nombre}
                    </h5> 
                    <Button/>
                </div>
            </div>  
        </div>       
        </>  
    )
}

export default VistaProducto

{/* <div className="card">
            <figure>
                <img src={imagen} alt='imagen'/>
            </figure>
        </div>
        <div className="card-content">
            <p>{nombre}</p>
        </div> */}