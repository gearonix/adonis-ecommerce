import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CartIcon } from './CartIcon'
import { AiFillAccountBook, AiFillAlert } from 'react-icons/ai'

export default {
  title: 'shared/ui/Typos/CartIcon',
  component: CartIcon,
  argTypes: {}
} as ComponentMeta<typeof CartIcon>

const Template: ComponentStory<typeof CartIcon> = (args) => <CartIcon {...args} />

export const Default = Template.bind({})
Default.args = {
  Icon: AiFillAccountBook
}
export const Alert = Template.bind({})

Alert.args = {
  Icon: AiFillAlert
}
