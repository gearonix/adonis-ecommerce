import {ComponentMeta, ComponentStory} from '@storybook/react'
import MessengerHeaderTemp from './MessengerHeaderTemp'
import {SearchInput} from 'shared/ui/mui'

export default {
  title: 'entities/Messenger/MessengerHeaderTemp',
  component: MessengerHeaderTemp,
  argTypes: {},
} as ComponentMeta<typeof MessengerHeaderTemp>

const Template: ComponentStory<typeof MessengerHeaderTemp> = (args) => <MessengerHeaderTemp {...args} />

export const Default = Template.bind({})
Default.args = {
  Search: SearchInput,
}
