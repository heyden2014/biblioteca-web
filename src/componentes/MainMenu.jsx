import '../estilos/menu.css'
import Logo from './Logo'
const MainMenu = () => {
  return (
    <nav className="navigation">
        <ul className="navigation__list">
        <li className="navigation__item">
        <Logo />

       </li>
            <li className="navigation__item"><a className="navigation__link" href="/">Inicio</a></li>
            <li className="navigation__item"><a className="navigation__link" href="/libros">Libros</a></li>
            <li className="navigation__item"><a className="navigation__link" href="/registrarlibro">Registrar Libro</a></li>
            <li className="navigation__item"><input className='botton-buscar' type='text'/> 
            <button className='button-buscar'  type='submit'>BUSCAR</button>
            </li>

        </ul>
    </nav>
  )
}

export default MainMenu
