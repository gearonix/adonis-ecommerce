import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SearchInput } from './SearchInput'
import { FixedWidthDecorator } from 'shared/config/storybook/decorators'

export default {
  title: 'shared/material/Inputs/SearchInput',
  component: SearchInput,
  argTypes: {}
} as ComponentMeta<typeof SearchInput>

const Template: ComponentStory<typeof SearchInput> = (args) => <SearchInput {...args} />

export const Default = Template.bind({})
Default.args = {

}
Default.decorators = [FixedWidthDecorator(300)]
