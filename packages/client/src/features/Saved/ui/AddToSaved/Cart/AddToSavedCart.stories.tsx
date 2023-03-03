import { ComponentMeta, ComponentStory } from '@storybook/react'
import CartSaved from './CartSaved'

export default {
  title: 'features/SavedProvider/AddToSavedCart',
  component: CartSaved,
  argTypes: {}
} as ComponentMeta<typeof CartSaved>

const Template: ComponentStory<typeof CartSaved> = (args) => <CartSaved {...args} />

export const Default = Template.bind({})
Default.args = {

}
