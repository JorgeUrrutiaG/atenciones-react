import './css/main.css';

interface MainProps {
  vistaId: string;
}

function Main({ vistaId }: MainProps) {
  const renderVista = () => {
    switch (vistaId) {
      case 'atenciones':
        return <h3>Vista de Atenciones</h3>; // Aquí irá <Atenciones />
      case 'trayectoria':
        return <h3>Vista de Trayectoria</h3>; // Aquí irá <Trayectoria />
      case 'porCurso':
        return <h3>Vista de Resumen Por Curso</h3>;
      case 'porTipo':
        return <h3>Vista de Resumen por Tipo Atención</h3>;
      case 'porTipo-I':
        return <h3>Vista de Resumen por Tipo Atención I SEMESTRE</h3>;
      case 'consolidado':
        return <h3>Vista de Mi Consolidado</h3>;
      default:
        return <h3>Seleccione una opción</h3>;
    }
  };

  return <main className="main">{renderVista()}</main>;
}

export default Main;
