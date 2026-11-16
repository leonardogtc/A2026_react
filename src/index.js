// 1. Importa o arquivo de estilos CSS global que está na mesma pasta (caminho relativo './').
// Como queremos apenas aplicar os estilos na página (e não guardar em uma variável), usamos o import direto sem o `from`.
import './index.css';

// 2. Importa a biblioteca principal do React (necessária para trabalhar com componentes e JSX)
import React from "react";

// 3. Importa o ReactDOM voltado para o navegador (client), responsável por manipular a página (DOM)
import ReactDOM from "react-dom/client";

// 4. Importa o componente principal `App`, que centraliza e organiza todos os outros componentes da aplicação
import App from './App';

// 5. Captura a <div id="root"></div> que está lá no arquivo public/index.html.
// É dentro dessa div que toda a nossa aplicação React será desenhada.
const el = document.getElementById("root");

// 6. Cria a "raiz" (root) do React conectada ao elemento HTML capturado acima.
// Nota: Nas aulas antigas (React 16/17) usava-se `ReactDOM.render(conteudo, el)`,
// mas a partir do React 18/19 o padrão passou a ser `createRoot` + `root.render`.
const root = ReactDOM.createRoot(el);

// 7. Renderiza (exibe) o componente principal <App /> dentro da raiz.
// Dessa forma, o `index.js` fica limpo (responsável apenas por inicializar o React),
// enquanto toda a estrutura de componentes da tela fica organizada dentro do `App.jsx`.
root.render(
    <App />
);



