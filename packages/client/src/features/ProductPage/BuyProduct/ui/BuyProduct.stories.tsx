import {ComponentMeta, ComponentStory} from '@storybook/react'
import BuyProduct from './BuyProduct'
import {FixedWidthDecorator} from 'shared/config/storybook/decorators'

export default {
  title: 'features/CurrentProduct/BuyProduct',
  component: BuyProduct,
  argTypes: {},
} as ComponentMeta<typeof BuyProduct>

const Template: ComponentStory<typeof BuyProduct> = (args) => <BuyProduct {...args} />

export const Default = Template.bind({})
Default.args = {

}
Default.decorators = [FixedWidthDecorator()]
