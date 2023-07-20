import {Headerwebsite} from './header/Header.jsx'// importamos el componente
import {MainSection} from './main/Main.jsx' //importamos el componente
import {FooterForWebPage} from './footer/Footer.jsx'
function App() {

  return (
    <>{/*Estas <></> permiten renderizar los Componentes sin ellas solo puedes renderizar un componente a la vez
    pero al agregarlas te permite renderizar tantos componentes como necesites ya que esta es la forma abreviada de 
    React.StrictMode
    */}

      {
        /*Los componentes por buenas practicas siempre deben iniciar con mayuscula Aca se le pueden agregar los valores a las variables definidas en los componentes
        llamamos el componente en este caso Headerwebsite y le agregamos los valores a las variables En este caso las variables son titulom descripcion
      */}

      {/*Llamamos al Header de la pagina*/}
      <Headerwebsite 
        titulo="TITULO DEL SITIO"
        descripcion="Escriba la descripcion corta del sitio..."
      />
      {/*Llamamos al main de la pagina*/}
      <MainSection 
        title="Productos populares"
      />

      <FooterForWebPage/>
    </>
  )
}

export default App
