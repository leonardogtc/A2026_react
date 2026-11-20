// 1. Importa o React para habilitar o uso de JSX
import React from "react";

// 2. Importa o array de dados dos alunos (`id`, `nome` e `nota`) localizado em `src/data/alunos.js`
// (os `../../` sobem dois níveis de diretório: de `repeticao` -> `components` -> `src`)
import alunos from '../../data/alunos';

// 3. Cria e exporta o componente funcional `ListaAlunos` usando uma Arrow Function que recebe `props`
export default props => {
    // 4. Usa o método `.map()` para percorrer o array `alunos` e transformar cada objeto
    // em um elemento JSX `<li>`, armazenando o novo array de itens na constante `lis`
    const lis = alunos.map((alunos) => {
        return (
            // A propriedade `key` é fundamental em listas no React: ela fornece um identificador único (`alunos.id`)
            // para que o React consiga rastrear de forma eficiente cada item caso a lista seja alterada
            <li key={alunos.id}>
                {/* Interpola as propriedades `id`, `nome` e `nota` de cada aluno dentro do item da lista */}
                {alunos.id}) {alunos.nome} = {alunos.nota}
            </li>
        );
    });

    // 5. Retorna a estrutura JSX com a lista de alunos renderizada
    return (
        <div>
            {/* Estilo inline no React usa chaves duplas `{{ ... }}` (a externa abre JS no JSX e a interna cria um objeto).
                A propriedade `listStyle: "none"` (em camelCase, equivalente a `list-style: none` no CSS) remove os marcadores padrão da lista `<ul>` */}
            <ul style={{ listStyle: "none" }}>
                {/* Renderiza todos os elementos `<li>` gerados pelo `.map()` acima */}
                {lis}
            </ul>
        </div>
    )
}