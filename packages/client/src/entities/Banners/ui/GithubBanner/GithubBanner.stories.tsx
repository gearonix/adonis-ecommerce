import { ComponentMeta, ComponentStory } from '@storybook/react'
import GithubBanner from './GithubBanner'

export default {
  title: 'entities/Banners/GithubBanner',
  component: GithubBanner,
  argTypes: {}
} as ComponentMeta<typeof GithubBanner>

const Template: ComponentStory<typeof GithubBanner> = (args) => <GithubBanner {...args} />

export const Default = Template.bind({})
Default.args = {

}
