import { ComponentMeta, ComponentStory } from '@storybook/react'
import { UploadButton } from './UploadButton'

export default {
  title: 'shared/kit/Buttons/UploadButton',
  component: UploadButton,
  argTypes: {}
} as ComponentMeta<typeof UploadButton>

const Template: ComponentStory<typeof UploadButton> = (args) => <UploadButton {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Button text'
}
