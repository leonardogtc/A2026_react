// 1. Importa o React para habilitar o uso de JSX
import React from "react";

// 2. Cria e exporta o componente funcional `Aleatorio`, recebendo `props` (onde virão `min` e `max`)
export default function Aleatorio(props) {
    // 3. Desestruturação (Destructuring) do JavaScript:
    // Extrai as propriedades `min` e `max` de dentro do objeto `props`.
    // Isso equivale a fazer:
    // const min = props.min;
    // const max = props.max;
    const { min, max } = props;

    // 4. Fórmula para gerar um número inteiro aleatório entre `min` e `max` (incluindo ambos):
    // - `(max - min + 1)` calcula a quantidade total de números possíveis no intervalo.
    // - `Math.random() * (max - min + 1)` gera um decimal entre 0 e a quantidade de opções.
    // - `Math.floor(...)` (ou `parseInt(...)`) arredonda para baixo, gerando um inteiro de `0` até `(max - min)`.
    // - `+ min` desloca o resultado para começar a partir do valor mínimo (`min`) até o valor máximo (`max`).
    const numero = Math.floor(Math.random() * (max - min + 1)) + min;

    return (
        <>
            <h2>Valor Aleatório</h2>
            <p>
                <strong>Valor Mínimo: </strong> {min}
            </p>
            <p>
                <strong>Valor Máximo: </strong> {max}
            </p>
            <p>
                <strong>Número Sorteado: </strong> {numero}
            </p>
        </>
    );
}

