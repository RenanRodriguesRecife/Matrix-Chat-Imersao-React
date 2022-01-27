import appConfig from '../config.json';

function GlobalStyle(){
    return(
        <style global jsx>{`
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                list-style:none;
            }
            body{
                font-family: 'Open Sans', sans-serif;
            }
            /* App fit height */
            html, body, #__next{
                min-height: 100vh;
                display:flex;
                flex:1;
            }
            #__next{
                flex: 1;
            }
            #__next>*{
                flex:1;
            }
            /* ./App fit height */
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
            color: ${appConfig.theme.colors.neutrals['000']};
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