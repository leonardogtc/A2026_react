// 1. Importa o arquivo de estilos CSS exclusivo do componente Card
import "./Card.css";

// 2. Importa o React para habilitar o uso de JSX
import React from "react";

// 3. Cria e exporta o componente funcional `Card` usando uma Arrow Function que recebe `props`
export default props => {
    // 4. Cria um objeto de estilo inline dinâmico (`cardStyle`) para personalizar a cor de cada cartão:
    // - No React, propriedades CSS que tinham hífen (`background-color`, `border-color`) usam o padrão camelCase (`backgroundColor`, `borderColor`).
    // - O operador OU lógico (`||`) define um valor padrão: se `props.color` for informado no App.jsx, usa o valor de `props.color`;
    //   caso contrário (se não for passado), usa a cor padrão à direita (`"#F00"` para o fundo e `"#FC0"` para a borda).
    const cardStyle = {
        backgroundColor: props.color || "#F00",
        borderColor: props.color || "#FC0",
    };

    // 5. Retorna a estrutura visual do cartão dividida em duas partes: cabeçalho (`.Title`) e corpo (`.Content`)
    return (
        // Div principal do cartão: combina a classe fixa `className="Card"` (do Card.css)
        // com o atributo `style={cardStyle}` que aplica as cores dinâmicas definidas no objeto acima.
        <div className="Card" style={cardStyle}>
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
