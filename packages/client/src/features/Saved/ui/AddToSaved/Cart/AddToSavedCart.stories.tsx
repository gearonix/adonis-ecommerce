import {ComponentMeta, ComponentStory} from '@storybook/react'
import AddToSavedCart from './AddToSavedCart'

export default {
  title: 'features/Saved/AddToSavedCart',
  component: AddToSavedCart,
  argTypes: {},
} as ComponentMeta<typeof AddToSavedCart>

const Template: ComponentStory<typeof AddToSavedCart> = (args) => <AddToSavedCart {...args} />

export const Default = Template.bind({})
Default.args = {

}
