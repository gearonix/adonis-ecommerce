import {ComponentMeta, ComponentStory} from '@storybook/react'
import MessageForm from './MessageForm'
import {FixedWidthDecorator} from 'shared/config/storybook/decorators'

export default {
  title: 'features/Messenger/MessageForm',
  component: MessageForm,
  argTypes: {},
} as ComponentMeta<typeof MessageForm>

const Template: ComponentStory<typeof MessageForm> = (args) => <MessageForm {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'some placeholder',
}

Default.decorators = [FixedWidthDecorator()]
