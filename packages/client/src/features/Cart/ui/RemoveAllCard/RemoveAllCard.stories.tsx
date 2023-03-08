import { ComponentMeta, ComponentStory } from '@storybook/react'
import RemoveAllCart from './RemoveAllCard'

export default {
  title: 'features/Cart/RemoveAllCard',
  component: RemoveAllCart,
  argTypes: {}
} as ComponentMeta<typeof RemoveAllCart>

const Template: ComponentStory<typeof RemoveAllCart> = (args) => <RemoveAllCart {...args} />

export const Default = Template.bind({})

Default.args = {

}
