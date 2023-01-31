import React, {FC} from 'react';
import s from "./style.module.scss";
import {NextImage} from "shared/ui";

export const Logo: FC = () => {
    return <div className={s.logo}>
        <NextImage src={'/logo.svg'}/>
        {/*<Image src={'/logo.svg'} alt={'Adonis'} priority={true} height={90} width={200}/>*/}
    </div>
}

