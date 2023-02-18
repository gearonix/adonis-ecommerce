import {ComponentMeta, ComponentStory} from '@storybook/react'
import Post from './Post'

export default {
  title: 'entities/Profile/Post',
  component: Post,
  argTypes: {},
} as ComponentMeta<typeof Post>

const Template: ComponentStory<typeof Post> = (args) => <Post />

export const Default = Template.bind({})
Default.args = {

}
