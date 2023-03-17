import { ComponentMeta, ComponentStory } from '@storybook/react'
import RemoveFromCart from './RemoveFromCart'

export default {
  title: 'features/Cart/RemoveFromCart',
  component: RemoveFromCart,
  argTypes: {}
} as ComponentMeta<typeof RemoveFromCart>

const Template: ComponentStory<typeof RemoveFromCart> = (args) => <RemoveFromCart {...args} />

export const Default = Template.bind({})
Default.args = {

}
