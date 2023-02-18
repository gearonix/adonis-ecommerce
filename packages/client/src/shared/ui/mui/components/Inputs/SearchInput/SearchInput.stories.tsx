import {ComponentMeta, ComponentStory} from '@storybook/react'
import {SearchInput} from './SearchInput'

export default {
  title: 'shared/mui/Inputs/SearchInput',
  component: SearchInput,
  argTypes: {},
} as ComponentMeta<typeof SearchInput>

const Template: ComponentStory<typeof SearchInput> = (args) => <SearchInput {...args} />

export const Default = Template.bind({})
Default.args = {

}
