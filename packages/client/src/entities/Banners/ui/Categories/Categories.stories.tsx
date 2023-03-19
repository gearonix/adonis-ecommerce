import { ComponentMeta, ComponentStory } from '@storybook/react'
import Categories from './Categories'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'shared/config/consts/themes'

export default {
  title: 'entities/Banners/Categories',
  component: Categories,
  argTypes: {}
} as ComponentMeta<typeof Categories>

const Template: ComponentStory<typeof Categories> = (args) => <Categories {...args} />

export const Light = Template.bind({})

export const Dark = Template.bind({})

Dark.decorators = [ThemeDecorator(Theme.DARK)]
