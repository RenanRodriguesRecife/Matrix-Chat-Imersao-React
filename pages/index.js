function Title(props){
    console.log(props.children);
    return(
        <h1>{props.children}</h1>
    );
}

function HomePage(){

    return (
    <div>
        <Title>Boas vinda de volta!</Title>
        <h2>Discord - Alura Matrix</h2>
        
        <style jsx>{`
            h1{
                color: red;
            }
        `}</style>
        </div>
    )
}

export default HomePage