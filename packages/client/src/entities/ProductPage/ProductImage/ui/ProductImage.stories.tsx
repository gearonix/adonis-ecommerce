import {ComponentMeta, ComponentStory} from '@storybook/react'
import ProductImage from './ProductImage'
import {ImageCarousel} from 'features/ProductPage/ImageCarousel'

export default {
  title: 'entities/ProductPage/ProductImage',
  component: ProductImage,
  argTypes: {},
} as ComponentMeta<typeof ProductImage>

const Template: ComponentStory<typeof ProductImage> = (args) => <ProductImage {...args} />

export const Default = Template.bind({})
Default.args = {
  ImageCarousel: ImageCarousel,
}
