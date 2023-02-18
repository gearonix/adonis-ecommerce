import {ComponentMeta, ComponentStory} from '@storybook/react'
import AuthTemplate from './AuthTemplate'
import GoogleButton from 'widgets/Login/ui/GoogleButton'

export default {
  title: 'entities/Auth/AuthTemplate',
  component: AuthTemplate,
  argTypes: {},
} as ComponentMeta<typeof AuthTemplate>

const Template: ComponentStory<typeof AuthTemplate> = (args) => <AuthTemplate {...args} />

export const Default = Template.bind({})
Default.args = {
  GoogleButton,
}
