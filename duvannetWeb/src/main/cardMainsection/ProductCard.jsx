export function ProdcutCard({imagen, link, precio}){
    return(
        <>
        <div className="card">
            <div className="img-secion">
                <img className="card-image"src={imagen} alt="Image for product card" />
            </div>
            <div className="info-card-section">
                <strong><a className="card-product-name-link" href="#">{link}</a></strong>
                <h3>{precio}</h3>
            </div>
        </div>
        </>
    )
}