import { Button } from '@material-ui/core';

import style from './menu.lateral.module.scss';

export default function MenuLateral(){
    return (
        <section className={style.menuLateral}>
            <Button variant="outlined">
                Gerenciador Indicadores
            </Button>
            <Button variant="outlined">
                Custos de Atividades
            </Button>
            
        </section>
    )
}