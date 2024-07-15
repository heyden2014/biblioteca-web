
import { useState } from "react"

export function LibrosCard ({idLibro, nombre, autor, imagen, isbn, anioP}){
  
  const [isAlquilar, setIsAlquilar] = useState(false)

  const texto = isAlquilar ? 'Alquilado' : 'Alquilar'
  const buttonClassName = isAlquilar  ? 'botton-alquilado' : 'botton'
  
  const handleClick = () => {
  
     setIsAlquilar(!isAlquilar)
   
  }
  return (
  
    
  <div className='item'>
           
            <figure>

          <img src={imagen} />
          </figure>
          <div className='info-libro'>
          <p className='info-datos'> ID: {idLibro}</p>
          <p className='info-datos'>NOMBRE: {nombre}</p>
          <p className='info-datos'>AÑO AUTOR: {autor}</p>
          <p className='info-datos'>AÑO PUBLICACIO: {anioP}</p>
          <p className='info-datos'>ISBN: {isbn}</p>
          <button className={buttonClassName} onClick={handleClick} >{texto}</button>

          </div>
          </div>
        
            

    
  );
}


