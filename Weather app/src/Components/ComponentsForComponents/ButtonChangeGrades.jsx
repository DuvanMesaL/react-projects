export function ButtonChangeGrade({action, functionFC, className}){
    return(
        <>
        <button className={`button-changer-grade ${className}`} onClick={functionFC}>{action}</button>
        </>
    )
}
