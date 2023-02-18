import {ComponentMeta, ComponentStory} from '@storybook/react'
import AddProduct from './AddProduct'

export default {
  title: 'entities/Profile/AddProduct',
  component: AddProduct,
  argTypes: {},
} as ComponentMeta<typeof AddProduct>

const Template: ComponentStory<typeof AddProduct> = (args) => <AddProduct {...args} />

export const Default = Template.bind({})
Default.args = {

}
