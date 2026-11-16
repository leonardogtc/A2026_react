// 1. Importa o arquivo de estilos CSS exclusivo do componente Card
import "./Card.css";

// 2. Importa o React para habilitar o uso de JSX
import React from "react";

// 3. Cria e exporta o componente funcional `Card` usando uma Arrow Function que recebe `props`
export default props => {
    // 4. Retorna a estrutura visual do cartão dividida em duas partes: cabeçalho (`.Title`) e corpo (`.Content`)
    return (
        // Div principal do cartão (estilizada pelo seletor `.Card` no Card.css)
        <div className="Card">
            {/* Cabeçalho do cartão: exibe o texto passado no atributo `titulo` (ex.: <Card titulo="#05 - Desafio Aleatório">) */}
            <div className="Title">{props.titulo}</div>

            {/* Corpo do cartão: `props.children` é uma propriedade especial do React que renderiza
                automaticamente tudo o que foi colocado ENTRE a abertura `<Card>` e o fechamento `</Card>` lá no App.jsx */}
            <div className="Content">
                {props.children}
            </div>
        </div>
    );
};
