import './css/footer.css'

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Jorge Urrutia. Todos los derechos reservados.</p>
            <div className="footer-status">
                <span className="status-dot online"></span> Servidores Activos
            </div>
        </footer>
    )
};

export default Footer;