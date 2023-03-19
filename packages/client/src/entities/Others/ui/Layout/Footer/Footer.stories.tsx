import { ComponentMeta, ComponentStory } from '@storybook/react'
import Footer from './Footer'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'shared/config/consts/themes'

export default {
  title: 'entities/Layout/Footer',
  component: Footer,
  argTypes: {}
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />

export const Light = Template.bind({})

export const Dark = Template.bind({})

Dark.decorators = [ThemeDecorator(Theme.DARK)]
