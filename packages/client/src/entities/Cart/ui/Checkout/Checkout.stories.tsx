import {ComponentMeta, ComponentStory} from '@storybook/react'
import Checkout from './Checkout'

export default {
  title: 'entities/Cart/Checkout',
  component: Checkout,
  argTypes: {},
} as ComponentMeta<typeof Checkout>

const Template: ComponentStory<typeof Checkout> = (args) => <Checkout {...args} />

export const Default = Template.bind({})
Default.args = {
  CheckoutButton: () => {
    return null
  },
}
