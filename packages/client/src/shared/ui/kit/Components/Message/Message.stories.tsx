import {ComponentMeta, ComponentStory} from '@storybook/react'
import Message from './Message'

export default {
  title: 'shared/kit/Components/Message',
  component: Message,
  argTypes: {},
} as ComponentMeta<typeof Message>

const Template: ComponentStory<typeof Message> = (args) => <Message {...args} />

export const MyMessage = Template.bind({})

MyMessage.args = {
  isMine: true,
  message: 'my message',
}

export const OpponentMessage = Template.bind({})
OpponentMessage.args = {
  isMine: false,
  message: 'some message',
}

