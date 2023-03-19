import { ComponentMeta, ComponentStory } from '@storybook/react'
import ExtraServices from './ExtraServices'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'shared/config/consts/themes'

export default {
  title: 'entities/Banners/ExtraServices',
  component: ExtraServices,
  argTypes: {}
} as ComponentMeta<typeof ExtraServices>

const Template: ComponentStory<typeof ExtraServices> = (args) => <ExtraServices {...args} />

export const Light = Template.bind({})

export const Dark = Template.bind({})

Dark.decorators = [ThemeDecorator(Theme.DARK)]

