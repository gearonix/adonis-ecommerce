import {ComponentMeta, ComponentStory} from '@storybook/react'
import MessengerContent from './MessengerContent'

export default {
  title: 'entities/Messenger/MessengerContent',
  component: MessengerContent,
  argTypes: {},
} as ComponentMeta<typeof MessengerContent>

const Template: ComponentStory<typeof MessengerContent> = (args) => <MessengerContent {...args} />

export const Default = Template.bind({})
Default.args = {

}
