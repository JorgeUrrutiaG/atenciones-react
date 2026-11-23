import './css/topbar.css';
import { users } from '../../data/users.json';

interface TopbarProps {
  titulo: string;
  onGoHome: () => void;
}

function Topbar({ titulo, onGoHome }: TopbarProps) {
  const userName = users?.[0]?.name || 'Cargando...';
  const userCargo = users?.[0]?.cargo || 'Cargando...';

  return (
    <header className="topbar">
      <div className="topbar-buttons">
        <button
          className="btn go-home-btn"
          title="Volver a Inicio"
          onClick={onGoHome}
        >
          <i className="fa-solid fa-house"></i>
        </button>
      </div>
      <div className="topbar-right">
        <div className="topbar-tittle">{titulo}</div>
        <div className="topbar-divider"></div>
        <div className="profile-photo"></div>
        <div className="topbar-userData">
          <span className="user-name" id="user-name">{userName}</span>
          <span className="user-cargo" id="user-cargo">{userCargo}</span>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
