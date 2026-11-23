import { useState } from 'react';
import Footer from './components/layouts/Footer';
import Sidebar from './components/layouts/Sidebar';
import Topbar from './components/layouts/Topbar';
import Main from './components/layouts/Main';

export const MENU_ITEMS = [
  { id: 'atenciones', icon: 'fa-person-circle-exclamation', label: 'Atenciones' },
  { id: 'trayectoria', icon: 'fa-arrow-up-right-dots', label: 'Trayectoria' },
  { id: 'porCurso', icon: 'fa-users-between-lines', label: 'Resumen Por Curso' },
  { id: 'porTipo', icon: 'fa-chart-column', label: 'Resumen por Tipo Atención' },
  { id: 'porTipo-I', icon: 'fa-1', label: 'Resumen por Tipo Atención I SEMESTRE' },
  { id: 'consolidado', icon: 'fa-clipboard-user', label: 'Mi Consolidado' },
];

function App() {
  const [vistaActiva, setVistaActiva] = useState(MENU_ITEMS[0]);

  return (
    <>
      <Topbar
        titulo={vistaActiva.label}
        onGoHome={() => setVistaActiva(MENU_ITEMS[0])}
      />
      <Sidebar
        menuItems={MENU_ITEMS}
        activeId={vistaActiva.id}
        onSelect={setVistaActiva}
      />
      <Main vistaId={vistaActiva.id} />
      <Footer />
    </>
  );
}

export default App;
