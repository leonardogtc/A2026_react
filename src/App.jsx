// 1. Importa o arquivo de estilos CSS exclusivo do componente App (onde estão as regras de `.App .Cards`)
import "./App.css";

// 2. Importa a biblioteca principal do React (necessária para usar JSX)
import React from "react";

// 3. Importa os componentes filhos e de layout que serão exibidos dentro do componente principal App
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from "./components/basicos/Aleatorio";

// Importa o componente de layout `Card`, que cria a moldura visual de cartão para envolver os exercícios
import Card from "./components/layout/Card";

import Familia from "./components/basicos/Familia";

// 4. Uma expressão JSX (semelhante ao HTML) pode ser armazenada em uma constante ou variável
// e depois utilizada na renderização dentro de outro JSX usando chaves: `{tag}`.
const tag = <h1>Olá React!!!</h1>;

// 5. Cria e exporta o componente principal usando uma Arrow Function (`=>`) anônima:
// - Por usar `export default`, não precisamos dar um nome para a função (quem importar escolhe o nome, ex.: `import App from './App'`).
// - Formas de declarar os parâmetros antes da seta `=>`:
//   * `(props) =>` ou `props =>` (quando tem 1 único parâmetro, os parênteses são opcionais)
//   * `_ =>` (convenção quando existe 1 parâmetro, mas não vamos utilizá-lo)
//   * `() =>` (quando não declaramos nenhum parâmetro)
// - Retorno Implícito: Ao remover o bloco de chaves `{}` após a seta `=>` e abrir direto parênteses `(`,
//   tudo o que está dentro de `(...)` é retornado AUTOMATICAMENTE, sem precisar escrever a palavra `return`!
export default () => (
    // No JSX, usamos `className` em vez de `class` para definir classes CSS, pois `class` é uma palavra reservada do JavaScript.
    <div className="App">
        <h1>Fundamentos React</h1>

        {/* Container `.Cards` que usa Flexbox (definido no App.css) para organizar todos os cartões lado a lado */}
        <div className="Cards">

            <Card titulo="#06 - Componente com filhos" color="rgba(21, 116, 224, 1)">
                {/* Passamos a propriedade `sobrenome` para o componente pai `<Familia />`,
                    que por sua vez repassará esse sobrenome para os seus componentes filhos `<FamiliaMembro />` */}
                <Familia sobrenome="Tavares" />
            </Card>

            {/* Ao abrir e fechar `<Card> ... </Card>`, tudo o que colocamos DENTRO dele é passado automaticamente
                para o componente Card através da propriedade especial `props.children`!
                Também podemos passar a propriedade opcional `color` (ex.: `color="#080"`) para definir a cor daquele cartão específico.
                Se `color` não for passado nos outros `<Card>`, eles usarão a cor padrão definida lá no `Card.jsx`. */}
            <Card titulo="#05 - Desafio Aleatório" color="#080">
                {/* Passamos os parâmetros `min` e `max` via props para definir o intervalo do sorteio */}
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#04 - Fragmento">
                {/* Renderiza o componente <Fragmento />. No HTML final (dentro de `.Content` do Card),
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
    </div>
);


