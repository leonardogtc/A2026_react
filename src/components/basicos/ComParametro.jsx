// 1. Importa o React para habilitar o uso de JSX neste arquivo
import React from "react"

// 2. Cria e exporta o componente funcional `ComParametro`.
// O parâmetro `props` (abreviação de "properties" / propriedades) é um objeto que recebe todos os
// atributos passados para o componente lá no index.js (ex.: titulo, aluno, nota).
// IMPORTANTE: `props` é SOMENTE LEITURA (read-only) — um componente nunca deve alterar suas próprias props diretamente!
export default function ComParametro(props) {
    // 3. Usa o operador ternário (condição ? valorSeVerdadeiro : valorSeFalso) para calcular o status.
    // Se `props.nota` for maior ou igual a 7, `status` recebe "Aprovado"; caso contrário, "Reprovado".
    const status = props.nota >= 7 ? "Aprovado" : "Reprovado"

    // 4. Retorna a estrutura JSX que será exibida na tela.
    // Usamos parênteses `(...)` no return para poder quebrar o JSX em várias linhas com segurança.
    return (
        // Elemento `<div>` envolvendo os elementos filhos (o retorno precisa ter um único elemento pai)
        <div>
            {/* Dentro do JSX, usamos chaves `{}` para interpolar (inserir) valores e expressões JavaScript */}
            {/* Exibe o valor da propriedade `titulo` passada ao componente */}
            <h2>{props.titulo}</h2>

            {/* Parágrafo combinando texto fixo com os valores dinâmicos vindos de `props` e da constante `status` */}
            <p>
                O aluno {props.aluno} tem nota <strong>{props.nota} </strong> e está {status}.
            </p>
        </div>
    )
}
