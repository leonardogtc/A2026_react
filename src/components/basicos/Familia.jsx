// 1. Importa o React para habilitar o uso de JSX
import React from "react";

// 2. Importa o componente filho `FamiliaMembro`
import FamiliaMembro from "./FamiliaMembro";

// 3. Cria e exporta o componente `Familia`, que recebe `props` vindas do `App.jsx` (ex.: `sobrenome`)
export default props => {
    return (
        <div>
            {/* Forma 1 (Passagem explícita): pega especificamente a propriedade `props.sobrenome`
                recebida pelo componente pai (`Familia`) e repassa para o filho (`FamiliaMembro`). */}
            <FamiliaMembro nome="Leonardo" sobrenome={props.sobrenome} />

            {/* Forma 2 (Operador Spread `...`): espalha (copia) TODAS as propriedades que `Familia`
                recebeu em `props` e repassa automaticamente para `FamiliaMembro`. */}
            <FamiliaMembro nome="Oliver" {...props} />

            {/* Forma 3 (Valor fixo/literal): define o `sobrenome` diretamente como texto fixo ("Tavares"),
                ignorando o que veio em `props.sobrenome`. */}
            <FamiliaMembro nome="Lúcia" sobrenome="Tavares" />
        </div>
    );
};
