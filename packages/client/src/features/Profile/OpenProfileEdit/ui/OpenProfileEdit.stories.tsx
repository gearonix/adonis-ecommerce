import {ComponentMeta, ComponentStory} from '@storybook/react'
import OpenProfileEdit from './OpenProfileEdit'

export default {
  title: 'features/Profile/OpenProfileEdit',
  component: OpenProfileEdit,
  argTypes: {},
} as ComponentMeta<typeof OpenProfileEdit>

const Template: ComponentStory<typeof OpenProfileEdit> = (args) => <OpenProfileEdit {...args} />

export const Default = Template.bind({})
Default.args = {

}
