<<<<<<< HEAD
import { createBrowserRouter } from "react-router-dom"
import Inicio from "../componentes/Inicio"
import Error404 from "../componentes/Error404"
import Libros from "../paginas/Libros"
import App from "../componentes/App"
import AcercaDe from "../paginas/AcercaDe"
import Contacto from "../paginas/Contacto"
import RegistrarLibro from "../paginas/RegistrarLibro"

const router = createBrowserRouter([
{
    path:"/",
    element:<App/>,
    errorElement: <Error404 />,
    children:[

        {
            index: true,
            element:<Inicio/>,
            
        },
        {
            path:"/libros",
            element:<Libros />,
            
        },
        {
            path:"/acercade",
            element:<AcercaDe />,
            
        },
        {
            path:"/contacto",
            element:<Contacto />,
            
        },
        {
            path:"/registrarlibro",
            element:<RegistrarLibro />,
            
        }
    ]
},


])

=======
import { createBrowserRouter } from "react-router-dom"
import Inicio from "../componentes/Inicio"
import Error404 from "../componentes/Error404"
import Libros from "../paginas/Libros"
import App from "../componentes/App"
import AcercaDe from "../paginas/AcercaDe"
import Contacto from "../paginas/Contacto"
import RegistrarLibro from "../paginas/RegistrarLibro"

const router = createBrowserRouter([
{
    path:"/",
    element:<App/>,
    errorElement: <Error404 />,
    children:[

        {
            index: true,
            element:<Inicio/>,
            
        },
        {
            path:"/libros",
            element:<Libros />,
            
        },
        {
            path:"/acercade",
            element:<AcercaDe />,
            
        },
        {
            path:"/contacto",
            element:<Contacto />,
            
        },
        {
            path:"/registrarlibro",
            element:<RegistrarLibro />,
            
        }
    ]
},


])

>>>>>>> ec65a6802dbdbf11baa519c6447f8d59411b454e
export default router