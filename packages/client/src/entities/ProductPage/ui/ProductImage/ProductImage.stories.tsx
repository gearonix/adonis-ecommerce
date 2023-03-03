import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ImageCarousel } from 'features/ProductPage'
import ProductImage from './ProductImage'

export default {
  title: 'entities/CurrentProduct/ProductImage',
  component: ProductImage,
  argTypes: {}
} as ComponentMeta<typeof ProductImage>

const Template: ComponentStory<typeof ProductImage> = (args) => <ProductImage {...args} />

export const Default = Template.bind({})
Default.args = {
  ImageCarousel: ImageCarousel
}
