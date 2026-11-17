// 1. Importa o React e a função `cloneElement` (usada para clonar um elemento React adicionando novas propriedades a ele)
import React, { cloneElement } from "react";

// 2. Cria e exporta o componente `Familia`, que recebe `props` vindas do `App.jsx` (incluindo `sobrenome` e `children`)
export default props => {
    return (
        <div>
            {
                // 3. Como repassar as propriedades do Pai (`Familia`) para múltiplos Filhos (`props.children`):
                // - ATENÇÃO às letras maiúsculas/minúsculas:
                //   * `React.Children` começa com "C" MAIÚSCULO (é o objeto utilitário do próprio React para lidar com elementos filhos).
                //   * `props.children` começa com "c" MINÚSCULO (é a propriedade que guarda os filhos passados dentro de `<Familia>...</Familia>`).
                // - `React.Children.map` percorre cada filho (`child`) dentro de `props.children`.
                // - `cloneElement(child, props)` cria um clone daquele componente filho injetando nele todas as `props` do pai (como `sobrenome="Tavares"`).
                React.Children.map(props.children, (child) => {
                    return cloneElement(child, props);
                })
            }
        </div>
    );
};

