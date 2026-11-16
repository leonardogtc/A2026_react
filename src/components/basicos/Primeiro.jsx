import React from "react";
// `export default` torna esta função disponível para ser importada em outros arquivos (ex.: no index.js).
// `function Primeiro()` cria um Componente Funcional no React.
// Nota: Por convenção do React, nomes de componentes começam sempre com Letra Maiúscula (PascalCase).
export default function Primeiro() {
    // O `return` define o que será renderizado (exibido na tela) quando usarmos <Primeiro />.
    // Pode retornar um texto simples (string), número ou elementos JSX (como <div>...</div>).
    return <h2>Primeiro Componente</h2>;
}
