import {ComponentMeta, ComponentStory} from '@storybook/react'
import MessageForm from './MessageForm'

export default {
  title: 'entities/MessageForm/MessageForm',
  component: MessageForm,
  argTypes: {},
} as ComponentMeta<typeof MessageForm>

const Template: ComponentStory<typeof MessageForm> = (args) => <MessageForm {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'some placeholder',
}
