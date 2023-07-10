import {ProdcutCard} from './cardMainsection/ProductCard.jsx'
export function MainSection({title}){
    return(
        <article className="main-product-section-container">
            <div className="main-product-sectiot-contenet-title">
                <h1>{title}</h1>
            </div>
            <div className="main-card-section-container">
                <ProdcutCard 
                imagen="https://dotcompatterns.files.wordpress.com/2022/04/hi-estudio-mi_vusbrwxk-unsplash.jpg?w=1024"
                link="Bell Tower"
                precio="$220 USD"
                />

                <ProdcutCard 
                imagen="https://dotcompatterns.files.wordpress.com/2022/04/hi-estudio-4ahg3ua_jdo-unsplash.jpg?w=1024"
                link="Mistral"
                precio="$220 USD"
                />

                <ProdcutCard 
                imagen="https://dotcompatterns.files.wordpress.com/2022/04/hi-estudio-uqwsy7xda6g-unsplash.jpg?w=1024"
                link="Shanti"
                precio="$220 USD"
                />

                <ProdcutCard 
                imagen="https://dotcompatterns.files.wordpress.com/2022/04/hi-estudio-oc2vgwdq7su-unsplash.jpg?w=1024"
                link="Matoki"
                precio="$220 USD"
                />
            </div>
        </article>
    )
}