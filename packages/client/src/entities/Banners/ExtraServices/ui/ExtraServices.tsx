import {FC} from 'react';
import s from './style.module.scss';
import {ContainerTitle, ExtraService} from 'shared/ui';

const ExtraServices: FC = () => {
    return <article className={s.extra_services}>
        <ContainerTitle>Our extra services</ContainerTitle>
        <div className={s.block}>
            {[1, 2, 3, 4].map((i) => {
                return <ExtraService key={i}/>;
            })}
        </div>
    </article>;
};

export default ExtraServices;
