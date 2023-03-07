import { FC } from 'react'
import s from './style.module.scss'
import { ContainerTitle, DefaultExtraService, ExtraService } from 'shared/ui/kit'
import { MyProjects } from 'shared/config/myLinks'
import { Map } from 'shared/lib/components'


const ExtraServices: FC = () => {
  return <article className={s.extra_services}>
    <ContainerTitle>Also see my other projects</ContainerTitle>
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
