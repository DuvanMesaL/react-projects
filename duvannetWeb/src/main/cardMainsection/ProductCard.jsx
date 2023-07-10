export function ProdcutCard({imagen, link, precio}){ /*Expor para que nos permita exportar los la funcion y le asignamos las variables para utilizarlas como lo necesitemos 
                                                        en la pagina*/
    return(
        <>
        <div className="card">
            <div className="img-secion">
                {/* Le damos la variable entre {} para dar a entender que el valor se le sera Asignado en el App.jsx si no le asignan ningun valor en 
                    App.jsx entonces queda vacio
                */}
                <img className="card-image" src={imagen} alt="Image for product card" />
            </div>
            <div className="info-card-section">
                <strong><a className="card-product-name-link" href="#">{link}</a></strong>
                <h3>{precio}</h3>
            </div>
        </div>
        </>
    )
}