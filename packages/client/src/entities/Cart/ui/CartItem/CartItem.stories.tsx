import {ComponentMeta, ComponentStory} from '@storybook/react'
import CartItem from './CartItem'
import {RemoveAllSaved} from 'features/Saved'

export default {
  title: 'entities/Cart/CartItem',
  component: CartItem,
  argTypes: {},
} as ComponentMeta<typeof CartItem>

const Template: ComponentStory<typeof CartItem> = (args) => <CartItem {...args} />

export const Default = Template.bind({})
Default.args = {
  Remove: RemoveAllSaved,
  SaveForLater: RemoveAllSaved,
}
