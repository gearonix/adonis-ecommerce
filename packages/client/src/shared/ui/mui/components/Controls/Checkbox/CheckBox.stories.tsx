import {ComponentMeta, ComponentStory} from '@storybook/react'
import {CheckBoxControl} from './CheckBoxControl'

export default {
  title: 'shared/mui/Controls/CheckBox',
  component: CheckBoxControl,
  argTypes: {},
} as ComponentMeta<typeof CheckBoxControl>

const Template: ComponentStory<typeof CheckBoxControl> = (args) => <CheckBoxControl {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'checkbox',
  idx: 1,
}
