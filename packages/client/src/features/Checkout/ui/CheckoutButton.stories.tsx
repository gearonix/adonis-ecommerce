import { ComponentMeta, ComponentStory } from '@storybook/react'
import CheckoutButton from './CheckoutButton'
import { FixedWidthDecorator } from 'shared/config/storybook/decorators'

export default {
  title: 'features/Checkout/CheckoutButton',
  component: CheckoutButton,
  argTypes: {}
} as ComponentMeta<typeof CheckoutButton>

const Template: ComponentStory<typeof CheckoutButton> = (args) => <CheckoutButton {...args} />

export const Default = Template.bind({})
Default.args = {

}
Default.decorators = [FixedWidthDecorator()]
