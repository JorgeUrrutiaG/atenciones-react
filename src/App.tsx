import './App.css'
import Footer from './components/layouts/Footer'
import Sidebar from './components/layouts/Sidebar'
import Topbar from './components/layouts/Topbar'
import Main from './components/layouts/Main'

function App() {
 const titulo:string = "Mi Aplicación";
  return (
    <>
      <Topbar titulo={titulo}/>
      <Sidebar />
      <Main />
      <Footer />
    </>
  )
}

export default App
