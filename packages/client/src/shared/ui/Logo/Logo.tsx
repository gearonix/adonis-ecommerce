import React, {FC} from 'react';
import s from "./style.module.scss";
import Image from "next/image";

export const Logo: FC = () => {
    return <div className={s.logo}>
        <Image src={'/logo.svg'} alt={'Adonis'} priority={true} height={90} width={200}/>
    </div>
}

