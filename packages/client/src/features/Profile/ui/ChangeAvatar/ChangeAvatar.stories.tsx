import { ComponentMeta, ComponentStory } from '@storybook/react'
import ChangeAvatar from './ChangeAvatar'

export default {
  title: 'features/Index/ChangeAvatar',
  component: ChangeAvatar,
  argTypes: {}
} as ComponentMeta<typeof ChangeAvatar>

const Template: ComponentStory<typeof ChangeAvatar> = (args) => <ChangeAvatar {...args} />

export const Default = Template.bind({})
Default.args = {

}
