import { ComponentMeta, ComponentStory } from '@storybook/react'
import Post from './PostsAndComments/Post/Post'

export default {
  title: 'entities/Index/Comment',
  component: Post,
  argTypes: {}
} as ComponentMeta<typeof Post>

const Template: ComponentStory<typeof Post> = (args) => <Post {...args}/>

export const Default = Template.bind({})
Default.args = {

}
