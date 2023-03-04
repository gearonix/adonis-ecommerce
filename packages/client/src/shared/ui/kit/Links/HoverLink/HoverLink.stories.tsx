import { ComponentMeta, ComponentStory } from '@storybook/react'
import { HoverLink } from './HoverLink'

export default {
  title: 'shared/ui/Typos/HoverLink',
  component: HoverLink,
  argTypes: {}
} as ComponentMeta<typeof HoverLink>

const Template: ComponentStory<typeof HoverLink> = (args) => <HoverLink {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'hoverlink text'
}

export const Bold = Template.bind({})
Bold.args = {
  children: 'hoverlink text',
  bold: true
}

