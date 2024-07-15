import '../estilos/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__text">© 2024 Biblioteca Web - Online</p>
        <nav className="footer__nav">
          <ul className="footer__list">
            <li className="footer__item"><a href="/acercade" className="footer__link">Acerca de</a></li>
            <li className="footer__item"><a href="/Contacto" className="footer__link">Contacto</a></li>
            <li className="footer__item"><a href="/NoPage" className="footer__link">Privacidad</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;