import { ComponentMeta, ComponentStory } from '@storybook/react'
import SignupChoice from './SignupChoice'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'shared/config/consts/themes'

export default {
  title: 'entities/Auth/SignupChoice',
  component: SignupChoice,
  argTypes: {}
} as ComponentMeta<typeof SignupChoice>

const Template: ComponentStory<typeof SignupChoice> = (args) => <SignupChoice {...args} />

export const Light = Template.bind({})

export const Dark = Template.bind({})

Dark.decorators = [ThemeDecorator(Theme.DARK)]

