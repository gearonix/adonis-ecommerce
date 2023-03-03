import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Logo } from './Logo'

export default {
  title: 'shared/kit/Components/Logo',
  component: Logo,
  argTypes: {}
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />

export const Default = Template.bind({})
