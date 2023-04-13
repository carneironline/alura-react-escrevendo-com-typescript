import { ITarefa } from '../../../types/tarefas'
import style from './Item.module.scss'

interface Props extends ITarefa {
    selecionaTarefa: (tarefaSelecionad: ITarefa) => void,
}

export default function Item(
    {
        tarefa, 
        tempo, 
        selecionado, 
        completado, 
        id, 
        selecionaTarefa
    }: Props) {

    const isSelected = selecionado ? style.itemSelecionado : '';
    const isCompletado = completado ? style.itemCompletado : '';

    return (
        <li 
        className={`${style.item} ${isSelected} ${isCompletado}`} 
        onClick={() => !completado && selecionaTarefa({
            tarefa, 
            tempo, 
            selecionado, 
            completado,
            id
        })}
        >
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && (<span className={style.concluido} aria-label='tarefa completada'></span>)}
        </li>
    )
}