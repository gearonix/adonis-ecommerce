import { ComponentMeta, ComponentStory } from '@storybook/react'
import { UserInfo } from './UserInfo'

export default {
  title: 'shared/kit/Typos/UserInfo',
  component: UserInfo,
  argTypes: {}
} as ComponentMeta<typeof UserInfo>

const Template: ComponentStory<typeof UserInfo> = (args) => <UserInfo {...args} />

export const Default = Template.bind({})
Default.args = {

}
