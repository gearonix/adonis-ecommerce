import {ComponentMeta, ComponentStory} from '@storybook/react'
import ImageCarousel from './ImageCarousel'

export default {
  title: 'features/CurrentProduct/ImageCarousel',
  component: ImageCarousel,
  argTypes: {},
} as ComponentMeta<typeof ImageCarousel>

const Template: ComponentStory<typeof ImageCarousel> = (args) => <ImageCarousel {...args} />

export const Default = Template.bind({})
Default.args = {

}
