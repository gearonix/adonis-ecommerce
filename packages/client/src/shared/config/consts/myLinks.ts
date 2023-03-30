import { MyProjectsAssets } from 'shared/config/consts/assets'
import { publicAssets } from 'shared/lib/helpers'


interface Project{
    image: string,
    title: string,
    link: string
}


export const MyProjects: Project[] = [
  {
    image: publicAssets(MyProjectsAssets.SpaceCalendar),
    title: 'Space Calendar',
    link: 'https://gearonixx.com/space-calendar'
  }
]


export const MyLinks = {
  PORTFOLIO: 'https://gearonixx.com/',
  PROJECT: 'https://github.com/Gearonix/Adonis-Ecommerce',
  VK: 'https://vk.com/id606417601',
  GITHUB: 'https://github.com/Gearonix',
  TELEGRAM: 'https://t.me/gearonixx'
}
