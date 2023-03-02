import {ComponentMeta, ComponentStory} from '@storybook/react'
import Post from './Comment'

export default {
  title: 'entities/Index/Comment',
  component: Post,
  argTypes: {},
} as ComponentMeta<typeof Post>

const Template: ComponentStory<typeof Post> = (args) => <Post />

export const Default = Template.bind({})
Default.args = {

}
