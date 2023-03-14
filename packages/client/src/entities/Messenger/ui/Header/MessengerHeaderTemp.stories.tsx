import { ComponentMeta, ComponentStory } from '@storybook/react'
import MessengerHeaderTemplate from './MessengerHeaderTemplate'
import { SearchInput } from 'shared/ui/material'

export default {
  title: 'entities/Messenger/MessengerHeaderTemp',
  component: MessengerHeaderTemplate,
  argTypes: {}
} as ComponentMeta<typeof MessengerHeaderTemplate>

const Template: ComponentStory<typeof MessengerHeaderTemplate> = (args) => <MessengerHeaderTemplate {...args} />

export const Default = Template.bind({})
Default.args = {
  Search: SearchInput
}
