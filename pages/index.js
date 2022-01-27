function Title(props){
    console.log(props.children);
    const Tag = props.tag;
    return(
    <>
        <h1>{props.children}</h1>
        <style jsx>{`
        ${Tag}{
            color: red;
            font-size:24px;
            font-weight:600;
        }
    `}</style>
    </>
    );
}

function HomePage(){

    return (
    <>
        <Title tag="h1">Boas vinda de volta!</Title>
        <h2>Discord - Alura Matrix</h2>
        
    </>
    )
}

export default HomePage