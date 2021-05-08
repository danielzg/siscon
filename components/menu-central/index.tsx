import style from './menu.central.module.scss';

export default function MenuCentral(){

    return (
        <section className={style.menuVertical}>
            <nav className={style.listagem}>
                
                <div>Sistema Teste</div>
                    <div className={style.card}>
                        <h6 className={style.titulo}>TESTE 1</h6>
                        <a className={style.ancora} href="#">Menu</a>
                        <a className={style.ancora} href="#">Menu</a>
                        <a className={style.ancora} href="#">Menu</a>
                        <a className={style.ancora} href="#">Menu</a>
                        <a className={style.ancora} href="#">Menu</a>
                        <a className={style.ancora} href="#">Menu</a>
                        <a className={style.ancora} href="#">Menu</a>
                        <a className={style.ancora} href="#">Menu</a>
                    </div>
                    <div className={style.card}>
                        <h6 className={style.titulo}>TESTE 2</h6>
                        <a className={style.ancora} href="#">Menu2</a>
                        <a className={style.ancora} href="#">Menu2</a>
                        <a className={style.ancora} href="#">Menu2</a>
                        <a className={style.ancora} href="#">Menu2</a>
                        <a className={style.ancora} href="#">Menu2</a>
                        <a className={style.ancora} href="#">Menu2</a>
                        <a className={style.ancora} href="#">Menu2</a>
                        <a className={style.ancora} href="#">Menu2</a>
                    </div>
                    <div className={style.card}>
                        <h6 className={style.titulo}>TESTE 3</h6>
                        <a className={style.ancora} href="#">Menu3</a>
                        <a className={style.ancora} href="#">Menu3</a>
                        <a className={style.ancora} href="#">Menu3</a>
                        <a className={style.ancora} href="#">Menu3</a>
                        <a className={style.ancora} href="#">Menu3</a>
                        <a className={style.ancora} href="#">Menu3</a>
                        <a className={style.ancora} href="#">Menu3</a>
                        <a className={style.ancora} href="#">Menu3</a>
                    </div>
            </nav>
        </section>
    )
}