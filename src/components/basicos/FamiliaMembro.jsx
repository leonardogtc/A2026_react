// 1. Importa o React para habilitar o uso de JSX
import React from "react";

// 2. Cria e exporta o componente filho `FamiliaMembro`, que exibe o `nome` e o `sobrenome` recebidos via `props`
export default props => {
    return (
        <div>
            <span>
                {props.nome} <strong>{props.sobrenome}</strong>
            </span>
        </div>
    );
};
