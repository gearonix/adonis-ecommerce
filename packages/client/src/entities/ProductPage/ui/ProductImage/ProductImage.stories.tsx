import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ImageCarousel } from 'features/ProductPage'
import ProductImage from './ProductImage'
import { Assets } from 'shared/config/consts/assets'
import { publicAssets } from 'shared/lib/helpers'

export default {
  title: 'entities/CurrentProduct/ProductImage',
  component: ProductImage,
  argTypes: {}
} as ComponentMeta<typeof ProductImage>

const Template: ComponentStory<typeof ProductImage> = (args) => <ProductImage {...args} />

export const Default = Template.bind({})
Default.args = {
  ImageCarousel: ImageCarousel,
  files: [publicAssets(Assets.BICYCLE)]
}
