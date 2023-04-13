import React from "react";

import style from './Botao.module.scss'

interface IBotao {
    type?: "button" | "submit" | "reset" | undefined, 
    onClick?: () => void,
    children: any
}

class Botao extends React.Component<IBotao> {
    render(): React.ReactNode {
        const {type = 'button', onClick} = this.props;

        return (
            <button onClick={onClick} type={type} className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao