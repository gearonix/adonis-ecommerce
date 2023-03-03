import { ComponentMeta, ComponentStory } from '@storybook/react'
import ProductDescriptions from './ProductDescriptions'

export default {
  title: 'entities/CurrentProduct/ProductDescription',
  component: ProductDescriptions,
  argTypes: {}
} as ComponentMeta<typeof ProductDescriptions>

const Template: ComponentStory<typeof ProductDescriptions> = (args) => <ProductDescriptions {...args} />

export const Default = Template.bind({})
Default.args = {

}
