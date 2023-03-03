import { ComponentMeta, ComponentStory } from '@storybook/react'
import Header from './Header'
import { Burger, SwitchTheme } from 'features/Layout'
import { HeaderSearch } from 'features/SearchPage'

export default {
  title: 'entities/Layout/Header',
  component: Header,
  argTypes: {}
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.args = {
  Search: HeaderSearch,
  DropDowns: SwitchTheme,
  Burger

}
