import {ComponentMeta, ComponentStory} from '@storybook/react'
import Categories from './Categories'

export default {
  title: 'entities/Banners/Categories',
  component: Categories,
  argTypes: {},
} as ComponentMeta<typeof Categories>

const Template: ComponentStory<typeof Categories> = (args) => <Categories {...args} />

export const Default = Template.bind({})
Default.args = {

}
