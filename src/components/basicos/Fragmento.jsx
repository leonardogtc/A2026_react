// 1. Importa o React para habilitar o uso de JSX e de React.Fragment
import React from "react";

// 2. Cria e exporta o componente funcional `Fragmento`.
// (Corrigido o nome do parâmetro de `propos` para `props`, embora seja opcional quando não utilizamos propriedades).
export default function Fragmento(props) {
    // 3. No React, um componente NÃO pode retornar dois elementos "irmãos" soltos lado a lado
    // (ex.: retornar <h2>...</h2> e <h4>...</h4> sem nada envolvendo gera o erro:
    // "Adjacent JSX elements must be wrapped in an enclosing tag").
    return (
        // 4. Quando NÃO queremos criar uma `<div>` extra no HTML final apenas para agrupar elementos,
        // usamos o React Fragment: `<> ... </>` (forma abreviada) ou `<React.Fragment> ... </React.Fragment>` (forma completa).
        // Nota: A forma abreviada `<>` não aceita atributos/propriedades; se precisar passar atributos (como `key`), use `<React.Fragment>`.
        <>
            <h2>Fragmento</h2>
            <h4>Cuidado com esse erro!</h4>
        </>
    )
}
