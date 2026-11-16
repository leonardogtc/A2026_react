// 1. Importa a biblioteca principal do React (necessária para usar JSX)
import React from "react";

// 2. Importa os componentes filhos que serão exibidos dentro do componente principal App
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card"

// 3. Uma expressão JSX (semelhante ao HTML) pode ser armazenada em uma constante ou variável
// e depois utilizada na renderização dentro de outro JSX usando chaves: `{tag}`.
const tag = <h1>Olá React!!!</h1>;

// 4. Cria e exporta o componente principal usando uma Arrow Function (`=>`) anônima:
// - Por usar `export default`, não precisamos dar um nome para a função (quem importar escolhe o nome, ex.: `import App from './App'`).
// - Formas de declarar os parâmetros antes da seta `=>`:
//   * `(props) =>` ou `props =>` (quando tem 1 único parâmetro, os parênteses são opcionais)
//   * `_ =>` (convenção quando existe 1 parâmetro, mas não vamos utilizá-lo)
//   * `() =>` (quando não declaramos nenhum parâmetro)
// - Retorno Implícito: Ao remover o bloco de chaves `{}` após a seta `=>` e abrir direto parênteses `(`,
//   tudo o que está dentro de `(...)` é retornado AUTOMATICAMENTE, sem precisar escrever a palavra `return`!
export default () => (
    <div id="app">
        <h1>Fundamentos React</h1>

        <Card titulo="#05 - Desafio Aleatório">
            {/* Passamos os parâmetros `min` e `max` via props para definir o intervalo do sorteio */}
            <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo="#04 - Fragmento">
            {/* Renderiza o componente <Fragmento />. No HTML final (dentro de <div id="app">),
            o <h2> e o <h4> dele serão inseridos diretamente, sem nenhuma <div> intermediária envolvendo eles. */}
            <Fragmento />
        </Card>

        <Card titulo="#03 - Com Parâmetros">
            {/* Reutilizamos o mesmo componente <ComParametro /> passando valores diferentes via propriedades (props).
            Nota: Textos podem ir entre aspas ("João"), mas números e expressões JS vão entre chaves ({8.3}). */}
            <ComParametro titulo="Aprendendo React" aluno="João" nota={8.3} />
            <ComParametro titulo="Aprendendo React" aluno="Maria" nota={9.3} />
        </Card>

        <Card titulo="#02 - Primeiro Componente">
            {/* Renderiza o nosso primeiro componente funcional básico */}
            <Primeiro />
        </Card>

        <Card titulo="#01 - Criação de Tag">
            {/* Interpola a constante `tag` definida acima usando chaves `{}` */}
            {tag}
        </Card>
    </div>
);

