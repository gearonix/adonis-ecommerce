import { FC } from 'react'
import s from './style.module.scss'
import { ContainerTitle, DefaultExtraService, ExtraService } from 'shared/ui/kit'
import { MyProjects } from 'shared/config/consts/myLinks'
import { Map } from 'shared/lib/components'
import { useTranslation } from 'react-i18next'


const ExtraServices: FC = () => {
  const { t } = useTranslation()
  return <article className={s.extra_services}>
    <ContainerTitle>{t('Also_see')}</ContainerTitle>
    <div className={s.block}>
      {MyProjects.map(({ image, title, link }, idx) => {
        return <ExtraService image={image} title={title} link={link} key={idx}/>
      })}
      <Map count={4 - MyProjects.length}>
        <DefaultExtraService/>
      </Map>
    </div>
  </article>
}

export default ExtraServices
