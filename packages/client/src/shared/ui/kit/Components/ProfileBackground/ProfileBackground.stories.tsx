import {ComponentMeta, ComponentStory} from '@storybook/react'
import {ProfileBackground} from './ProfileBackground'
import {ChangeBackground} from 'features/Profile/ChangeBackground'

export default {
  title: 'shared/kit/Components/ProfileBackground',
  component: ProfileBackground,
  argTypes: {},
} as ComponentMeta<typeof ProfileBackground>

const Template: ComponentStory<typeof ProfileBackground> = (args) => <ProfileBackground {...args} />


export const WithImage = Template.bind({})
WithImage.args = {
  ChangeBackground: <ChangeBackground/>,
}
