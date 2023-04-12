import React from "react";
import Botao from "../Botao";

import style from './Formulario.module.scss'
import { ITarefa } from "../../types/tarefas";

class Formulario extends React.Component<{setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>> }> {
    state = {
        tarefa: "",
        tempo: "00:00"
    }

    handleChangeTask(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({...this.state, tarefa: event.target.value})
    }

    handleChangeTime(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({...this.state, tempo: event.target.value})
    }

    adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, {...this.state}])
        console.log(this.state)
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Tarefa</label>
                    <input 
                        type="text" 
                        name="tarefa" 
                        id="tarefa"
                        defaultValue={this.state.tarefa}
                        onChange={this.handleChangeTask.bind(this)}
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
                        defaultValue={this.state.tempo}
                        onChange={this.handleChangeTime.bind(this)}
                        min="00:00:00"
                        max="01:30:00"
                        required 
                    />
                </div>
                <Botao type="submit">Adicionar</Botao>
            </form>
        )
    }
}

export default Formulario