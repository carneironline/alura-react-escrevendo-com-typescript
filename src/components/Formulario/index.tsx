import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import Botao from "../Botao";
import { ITarefa } from "../../types/tarefas";

import style from './Formulario.module.scss'

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>,
}

export default function Formulario({ setTarefas }: Props) {
    const [tarefa, setTarefa] = useState('');
    const [tempo, setTempo] = useState('00:00');

    function handleChangeTask(event: React.ChangeEvent<HTMLInputElement>) {
        setTarefa(event.target.value)
    }

    function handleChangeTime(event: React.ChangeEvent<HTMLInputElement>) {
        setTempo(event.target.value)
    }

    function adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        
        setTarefas(tarefasAntigas => [
            ...tarefasAntigas, 
            {
                tarefa,
                tempo,
                selecionado: false,
                completado: false,
                id: uuidv4()
            }
        ]);

        setTarefa('')
        setTempo('00:00')
    }

    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">Tarefa</label>
                <input 
                    type="text" 
                    name="tarefa" 
                    id="tarefa"
                    value={tarefa}
                    onChange={handleChangeTask}
                    placeholder="O que você quer estudar"
                    required 
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input 
                    type="time" 
                    step={1}
                    name="tempo" 
                    id="tempo"
                    value={tempo}
                    onChange={handleChangeTime}
                    min="00:00:00"
                    max="01:30:00"
                    required 
                />
            </div>
            <Botao type="submit">Adicionar</Botao>
        </form>
    )
}


