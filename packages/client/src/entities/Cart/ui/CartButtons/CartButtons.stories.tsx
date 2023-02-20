import {ComponentMeta, ComponentStory} from '@storybook/react'
import {RemoveAllSaved} from 'features/Saved'
import CartButtons from './CartButtons'
import {FixedWidthDecorator} from 'shared/config/storybook/decorators'

export default {
  title: 'entities/Cart/CartButtons',
  component: CartButtons,
  argTypes: {},
} as ComponentMeta<typeof CartButtons>

const Template: ComponentStory<typeof CartButtons> = (args) => <CartButtons {...args} />

export const Default = Template.bind({})
Default.args = {
  RemoveAll: RemoveAllSaved,
}
Default.decorators = [FixedWidthDecorator(500)]
