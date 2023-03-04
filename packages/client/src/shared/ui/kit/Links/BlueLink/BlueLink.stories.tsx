import { ComponentMeta, ComponentStory } from '@storybook/react'
import { BlueLink } from './BlueLink'

export default {
  title: 'shared/ui/Links/BlueLink',
  component: BlueLink,
  argTypes: {}
} as ComponentMeta<typeof BlueLink>

const Template: ComponentStory<typeof BlueLink> = (args) => <BlueLink {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'hi ;) blue link text'
}
