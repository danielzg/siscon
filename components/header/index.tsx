import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";
import Image from 'next/image';
import { MdAddAlert, MdLibraryBooks, MdList, MdSupervisorAccount } from 'react-icons/md';
import Button from '@material-ui/core/Button';

 
import style from './header.module.scss';

export default function Header(){

    const [menuCentral, setMenuCentral] = useState(false);
    const [menuLateral, setMenuLateral] = useState(false);

    function renderizaMenuCentral(){
        setMenuCentral(!menuCentral)
    }

    function renderizaMenuLateral(){
        setMenuLateral(!menuLateral)
    }

    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR
    })

    return (
            <div className={style.headerContanier}>
                <Image
                width={140} height={140} 
                src="/arvore.png" alt="" 
                objectFit="cover" />
                <span>Fale Conosco <MdSupervisorAccount size={20} /> </span>
                <span>
                    <Button variant="outlined">
                        <MdList size={20} 
                        onClick={renderizaMenuCentral} />
                    </Button>
                    
                </span>
                <span>Nome</span>
                <span>
                    <Button variant="outlined">
                        <MdAddAlert size={20} />
                    </Button>
                </span>
                <span>{currentDate}</span>
                <span>
                    <Button variant="outlined">
                        <MdLibraryBooks size={20} 
                        onClick={renderizaMenuLateral}/>
                    </Button>
                </span>
                
            </div>
    )
}