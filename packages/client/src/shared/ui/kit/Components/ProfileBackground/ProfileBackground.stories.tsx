import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ProfileBackground } from 'shared/ui/kit'
import { ChangeBackground } from 'features/Profile'

export default {
  title: 'shared/ui/Components/ProfileBackground',
  component: ProfileBackground,
  argTypes: {}
} as ComponentMeta<typeof ProfileBackground>

const Template: ComponentStory<typeof ProfileBackground> = (args) => <ProfileBackground {...args} />


export const WithImage = Template.bind({})
WithImage.args = {
  ChangeBackground: <ChangeBackground/>
}
