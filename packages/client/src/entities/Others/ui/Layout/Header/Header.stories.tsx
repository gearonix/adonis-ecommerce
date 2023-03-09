import { ComponentMeta, ComponentStory } from '@storybook/react'
import Header from './Header'
import { Burger, SwitchTheme } from 'features/Layout'
import { SearchProductsForm } from 'features/SearchPage'
import { HeaderInput } from 'shared/ui/kit'

export default {
  title: 'entities/Layout/Header',
  component: Header,
  argTypes: {}
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.args = {
  Search: () => <SearchProductsForm Component={HeaderInput}/>,
  DropDowns: SwitchTheme,
  Burger

}
