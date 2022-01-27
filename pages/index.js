function GlobalStyle(){
    return(
        <style global jsx>{`
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
               
            }
            body{
                font-family: sans-serif;
            }
        `}</style>
    )
}

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
        <GlobalStyle/>
        <Title tag="h1">Boas vinda de volta!</Title>
        <h2>Discord - Alura Matrix</h2>
        
    </>
    )
}

export default HomePage