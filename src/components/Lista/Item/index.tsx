import { ITarefa } from '../../../types/tarefas'
import style from '../Lista.module.scss'

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

    return (
        <li 
        className={`${style.item} ${isSelected}`} 
        onClick={() => selecionaTarefa({
            tarefa, 
            tempo, 
            selecionado, 
            completado,
            id
        })}
        >
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}