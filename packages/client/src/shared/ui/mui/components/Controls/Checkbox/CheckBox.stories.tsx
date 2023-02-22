import {ComponentMeta, ComponentStory} from '@storybook/react'
import {Checkbox} from './Checkbox'

export default {
  title: 'shared/mui/Controls/CheckBox',
  component: Checkbox,
  argTypes: {},
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'checkbox',
  idx: 1,
}
