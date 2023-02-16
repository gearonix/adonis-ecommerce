import s from './style.module.scss';
import {ContainerTitle} from 'shared/ui';

const Languages = () => {
  return <article className={s.languages}>
    <ContainerTitle>Suppliers by region</ContainerTitle>
    <div className={s.block}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
        return <div className={s.item} key={i}>
          <div className={s.item_icon}></div>
          <div>
            <h4>United States</h4>
            <span className={s.description}>shopname.ae</span>
          </div>
        </div>;
      })}
    </div>
  </article>;
};

export default Languages;
