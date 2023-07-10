export function Headerwebsite({titulo, info, content, desing, by}){
    return(
        <div className="info-content social">
                <div className="info-tilte-content">
                    <h4>{titulo}</h4>
                </div>
                <div className="info">
                    <p>{info}</p>
                </div>
                {
                    content
                }
                <div className="desing-by-whit">
                    <p>{desing} <a href="">{by}</a></p>
                </div>
            </div>
    )
}