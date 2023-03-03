import { ComponentMeta, ComponentStory } from '@storybook/react'
import ChangeProfile from './ChangeProfile'

export default {
  title: 'features/Index/OpenProfileEdit',
  component: ChangeProfile,
  argTypes: {}
} as ComponentMeta<typeof ChangeProfile>

const Template: ComponentStory<typeof ChangeProfile> = (args) => <ChangeProfile {...args} />

export const Default = Template.bind({})
Default.args = {

}
