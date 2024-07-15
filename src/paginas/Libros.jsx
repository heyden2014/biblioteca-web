
import { data } from "/data";

import { LibrosCard } from "../componentes/LibrosCard";

const Libros = () => {
  //nombre, autor, año de publicación, códigos ISBN de diez y trece dígitos, imagen de portada, sinopsis, críticas
  return (
    <>
    <div className="contenedor">
    <a href="/registrarlibro" className="botton-registrar" >REGISTRAR LIBRO</a>
    </div>
      <div className="container-items">
        
        {data.map((libros) => (
          <LibrosCard
            key={libros.id}
            idLibro={libros.id}
            nombre={libros.nombre}
            autor={libros.autor}
            imagen={libros.imagen}
            anioP={libros.anioP}
            isbn={libros.isbn}
          />
        ))}
      </div>
    </>
  );
};

export default Libros;
