import {ComponentMeta, ComponentStory} from '@storybook/react'
import Header from './Header'
import {SwitchThemeDrops} from 'features/Layout/SwitchTheme'
import {Burger} from 'features/Layout/Burger'
import {HeaderSearch} from 'features/SearchPage/HeaderSearch'

export default {
  title: 'entities/Layout/Header',
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.args = {
  Search: HeaderSearch,
  DropDowns: SwitchThemeDrops,
  Burger,

}
