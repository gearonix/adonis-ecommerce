import {ComponentMeta, ComponentStory} from '@storybook/react'
import AddToCart from './AddToCart'
import {FixedWidthDecorator} from 'shared/config/storybook/decorators'

export default {
  title: 'features/CurrentProduct/BuyProduct',
  component: AddToCart,
  argTypes: {},
} as ComponentMeta<typeof AddToCart>

const Template: ComponentStory<typeof AddToCart> = (args) => <AddToCart {...args} />

export const Default = Template.bind({})
Default.args = {

}
Default.decorators = [FixedWidthDecorator()]
