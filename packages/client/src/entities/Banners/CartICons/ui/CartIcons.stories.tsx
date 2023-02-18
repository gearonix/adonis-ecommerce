import {ComponentMeta, ComponentStory} from '@storybook/react'
import CartIcons from './CartIcons'

export default {
  title: 'entities/Banners/CartIcons',
  component: CartIcons,
  argTypes: {},
} as ComponentMeta<typeof CartIcons>

const Template: ComponentStory<typeof CartIcons> = (args) => <CartIcons {...args} />

export const Default = Template.bind({})
Default.args = {

}
