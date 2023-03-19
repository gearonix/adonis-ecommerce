import { ComponentMeta, ComponentStory } from '@storybook/react'
import MessengerContent from './MessengerContent'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'shared/config/consts/themes'

export default {
  title: 'entities/Messenger/MessengerContent',
  component: MessengerContent,
  argTypes: {}
} as ComponentMeta<typeof MessengerContent>

const Template: ComponentStory<typeof MessengerContent> = (args) => <MessengerContent {...args} />

export const Light = Template.bind({})

Light.args = {
  messages: [],
  userId: 66
}

export const Dark = Template.bind({})

Dark.args = {
  messages: [],
  userId: 66
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
