export function CardAditionalInfo({title, data, datacomplement, content, NewClassName}){
    return(
        <section className={`Aditional-info-Card ${NewClassName}`}>
            <div className="Top-title-Card">
                <h3 className="Title-Aditional-info">{title}</h3>
            </div>
            <div className="Data-info-Card">
                <h1 className="Data-Aditional-Info">{data}</h1>
                <h2 className="Data-Complement">{datacomplement}</h2>
            </div>
            <div className="Content-info-Card">
                {content}
            </div>
        </section>
    )
}