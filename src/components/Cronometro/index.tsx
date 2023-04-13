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
    
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            tempo: {tempo}
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>  
            <Botao>
                Começar
            </Botao>
        </div>
    )
}