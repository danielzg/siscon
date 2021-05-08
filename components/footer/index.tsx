import Image from 'next/image';

import style from './footer.module.scss';

export default function Footer(){
    return (
        <section className={style.footerContainer}>
          <Image
                width={40} height={75} 
                src="/folhagem.png" alt="" 
                objectFit="cover" />
        </section>
    )
}