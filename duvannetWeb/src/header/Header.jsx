export function Headerwebsite({titulo, descripcion, imagen}){
    return(
        <header className="Header-duvannet-website-container">
            <div className="header-image-content">
            <div className="image"></div>
        </div>
        <div className="contanier-middle-header">
            <div className="div"></div>
            <div className="header-title">
                <h2>{titulo}</h2>
                <div className="header-descripcion-content">
                    <p>{descripcion}</p>
                </div>
            </div>
            <div className="div"></div>
        </div>
        </header>
    )
}