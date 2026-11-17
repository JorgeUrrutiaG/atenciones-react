import './css/topbar.css'

function Topbar() {
    return (
        <header className="topbar">
            <div className="topbar-buttons">
                <button className="btn go-home-btn" id="go-home-btn" title="Volver a Inicio">
                    <i className="fa-solid fa-house"></i>
                </button>
            </div>
            <div className="topbar-right">
                <div className="topbar-tittle" id="titulo"></div>
                <div className="topbar-divider"></div>
                <div className="profile-photo">

                </div>
                <div className="topbar-userData">
                    <span className="user-name" id="user-name">Cargando...</span>
                    <span className="user-perfil" id="user-perfil" hidden></span>
                    <span className="user-cargo" id="user-cargo"></span>
                    <span className="user-correo" id="user-correo" hidden></span>
                </div>
            </div>
        </header>
    )
}

export default Topbar;