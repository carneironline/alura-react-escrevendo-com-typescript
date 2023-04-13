import Botao from "../Botao";
import Relogio from "./Relogio";
import { ITarefa } from "../../types/tarefas";

import style from './Cronometro.module.scss'
import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";

interface Props {
    selecionado: ITarefa | undefined
}

export default function Cronometro({selecionado}: Props) {
    const [tempo, setTempo] = useState<number>()

    useEffect(() => {
        if(selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo));
        }
    }, [selecionado])

    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if(contador > 0) {
                const lessContador = contador - 1
                setTempo(lessContador);

                return regressiva(lessContador)
            }
        }, 1000);
    }
    
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>  
            <Botao onClick={() => regressiva(tempo)}>
                Começar
            </Botao>
        </div>
    )
}