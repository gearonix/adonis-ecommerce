import {ComponentMeta, ComponentStory} from '@storybook/react'
import ProductDescription from './ProductDescription'

export default {
  title: 'entities/ProductPage/ProductDescription',
  component: ProductDescription,
  argTypes: {},
} as ComponentMeta<typeof ProductDescription>

const Template: ComponentStory<typeof ProductDescription> = (args) => <ProductDescription {...args} />

export const Default = Template.bind({})
Default.args = {

}
