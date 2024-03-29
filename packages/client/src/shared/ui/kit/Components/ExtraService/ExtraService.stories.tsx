import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ExtraService } from './ExtraService'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'shared/config/consts/themes'

export default {
  title: 'shared/ui/Components/ExtraService',
  component: ExtraService,
  argTypes: {}
} as ComponentMeta<typeof ExtraService>

const Template: ComponentStory<typeof ExtraService> = (args) => <ExtraService {...args} />


export const Light = Template.bind({})

Light.args = {
  link: 'baggage'
}


export const Dark = Template.bind({})

Light.args = {
  link: 'baggage'
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]

