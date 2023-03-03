import { ComponentMeta, ComponentStory } from '@storybook/react'
import OpenAddProduct from './OpenAddProduct'

export default {
  title: 'features/Index/OpenAddProduct',
  component: OpenAddProduct,
  argTypes: {}
} as ComponentMeta<typeof OpenAddProduct>

const Template: ComponentStory<typeof OpenAddProduct> = (args) => <OpenAddProduct {...args} />

export const Default = Template.bind({})
Default.args = {

}
