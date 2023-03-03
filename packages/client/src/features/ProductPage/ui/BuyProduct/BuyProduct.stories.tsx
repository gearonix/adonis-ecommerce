import { ComponentMeta, ComponentStory } from '@storybook/react'
import CartButton from './CartButton'
import { FixedWidthDecorator } from 'shared/config/storybook/decorators'

export default {
  title: 'features/CurrentProduct/BuyProduct',
  component: CartButton,
  argTypes: {}
} as ComponentMeta<typeof CartButton>

const Template: ComponentStory<typeof CartButton> = (args) => <CartButton {...args} />

export const Default = Template.bind({})
Default.args = {

}
Default.decorators = [FixedWidthDecorator()]
