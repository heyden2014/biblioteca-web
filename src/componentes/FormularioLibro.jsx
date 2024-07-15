//nombre, autor, año de publicación, códigos ISBN de diez y trece dígitos, imagen de portada, sinopsis, críticas

const FormularioLibro = () => {
  return (
    <div className="contenedor">
      <form>
        
        <div className="div-form">
           <input id="nombre" placeholder="Nombre y/o Título de Libro" />
        </div>
        <div className="div-form">
         
          <input id="nombre" placeholder="Autor del Libro" />
        </div>
        <div className="div-form">
         
          <input id="nombre" placeholder="Año Publicación" />
        </div>
        <div className="div-form">
         
          <input id="nombre" type="number" placeholder="Código ISBN" />
        </div>
        
        <div className="div-form">
         <label>Imagen de Portada</label>
          <input id="nombre" type="file" placeholder="Imagen del Libro" />
        </div>
        <div className="contenedor">
         
          <button className="botton-registrar" name="btnGuardar" > GUARDAR </button>
        </div>


      </form>
    </div>
  );
};

export default FormularioLibro;
