import { Headerwebsite } from './info-for-footer.jsx'
import { Infologos } from './info-logo.jsx'
import { ContactME } from './contactinput.jsx'

export function FooterForWebPage(){
    return(
        <footer className="Footer-website-container">
            <div className="container-info">
                <>
                    {/*
                        Importamos el componente y como podemos apreciar al componente le podemos dar otro componente entre sus valores
                        en este caso el componente Headerwebsite en content tiene al componente Infologos.
                    */}
                    <Headerwebsite 
                        titulo="Acerda del blog"
                        info="Masu es un blog que documenta el viaje de una persona con imágenes cuadriláteras regulares. No te olvides de seguirme en:"
                        content = {<Infologos />}
                        desing ="Programado con"
                        by ="React"
                    />
                    {/*
                        otro ejemplo donde le damos un componente como valor al componente principal
                        en este caso el componente Headerwebsite en content tiene al componente ContacMe.
                    */}
                    <Headerwebsite 
                        titulo="Newsletter"
                        info="Suscríbete a mi boletín de correo electrónico en el que encontrarás un motón de historias inspiradoras sobre mi viaje (que todavía continúa)."
                        content = {<ContactME />}
                        desing ="Diseñado con"
                        by ="WordPress.com"
                    />
                </>
            </div>
        </footer>
        
    )
}