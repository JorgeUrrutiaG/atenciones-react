import './css/sidebar.css'

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        {/* <img
          src="https://drive.google.com/thumbnail?id=1TA-SwDW0F8xlJiZ7x8LuVdNbWYDDMtUj"
          width="40"
          height="40"
        /> */}
      </div>

      <nav className="sidebar-menu">
        <ul id="sidebar-list">
          <li className="sidebar-item">
            <a
              href="#"
              className="sidebar-link link-atenciones"
              id="link-atenciones"
            >
              <i className="fa-solid fa-person-circle-exclamation"></i>
              <span className="tooltip">Atenciones</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              href="#"
              className="sidebar-link link-trayectoria"
              id="link-trayectorias"
            >
              <i className="fa-solid fa-arrow-up-right-dots"></i>
              <span className="tooltip">Trayectoria</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              href="#"
              className="sidebar-link link-porCurso"
              id="link-porCurso"
            >
              <i className="fa-solid fa-users-between-lines"></i>
              <span className="tooltip">Resumen Por Curso</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link link-porTipo" id="link-porTipo">
              <i className="fa-solid fa-chart-column"></i>
              <span className="tooltip">Resumen por Tipo Atención</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              href="#"
              className="sidebar-link link-porTipo-I"
              id="link-porTipo-I"
            >
              <i className="fa-solid fa-1"></i>
              <span className="tooltip">
                Resumen por Tipo Atención I SEMESTRE
              </span>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              href="#"
              className="sidebar-link link-consolidado"
              id="link-consolidado"
            >
              <i className="fa-solid fa-clipboard-user"></i>
              <span className="tooltip">Mi Consolidado</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
export default Sidebar;
