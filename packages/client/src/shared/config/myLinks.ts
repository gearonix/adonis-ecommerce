import { MyProjectsAssets } from 'shared/config/assets'


interface Project{
    image: MyProjectsAssets,
    title: string,
    link: string
}


export const MyProjects: Project[] = [
  {
    image: MyProjectsAssets.SpaceCalendar,
    title: 'Space Calendar',
    link: 'https://gearonixx.com/space_calendar/index.html'
  }
]


export const MyLinks = {
  PORTFOLIO: '#',
  PROJECT: 'https://github.com/Gearonix/Adonis-Ecommerce',
  VK: 'https://vk.com/id606417601',
  GITHUB: 'https://github.com/Gearonix',
  TELEGRAM: 'https://t.me/gearonixx'
}
