import { ComponentMeta, ComponentStory } from '@storybook/react'
import GithubBanner from './GithubBanner'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'shared/config/consts/themes'

export default {
  title: 'entities/Banners/GithubBanner',
  component: GithubBanner,
  argTypes: {}
} as ComponentMeta<typeof GithubBanner>

const Template: ComponentStory<typeof GithubBanner> = (args) => <GithubBanner {...args} />

export const Light = Template.bind({})

export const Dark = Template.bind({})

Dark.decorators = [ThemeDecorator(Theme.DARK)]

